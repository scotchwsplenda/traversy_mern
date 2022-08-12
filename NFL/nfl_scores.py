import pandas as pd
from .models import nfl_teams, predicted_score
from .forms import prediction_form
from datetime import datetime
import numpy as np


def choose_team_view(request):
    team_view_form = nfl_teams.objects.all()
    team_acr = str(request.POST.get('butts'))
    if request.method=='POST':
        return redirect('cool_form_team', acr = team_acr)
    return render(request, "nfl_2021/team.html", {'form': team_view_form, 'phrase' : 'prognosticate on'})

def cool_form_view(request, acr):
    url = 'https://www.pro-football-reference.com/teams/'+acr+'/2021.htm'
    table = pd.read_html(url, match='Game Results Table')
    df = table[0]
    df.columns=['Week','Day','Date','Time','BoxScore','Result','OT','Rec','Home_Away','Opp','HawkScore','OppScore','1stD','TotYd','PassY','RushY','TO','1stD','TotYd','PassY','RushY','TO','Offense','Defense','Sp. Tms']
    df.loc[df['Home_Away'].isnull(), 'Home_Away'] = 'VS.'
    df.loc[df['Home_Away'] == '@', 'Home_Away'] = 'AT'
    df['Title'] = df['Home_Away']+' '+df['Opp']+' -'+df['Day']+' '+df['Date']+' @ '+df['Time']
    cols = []
    for x in range(len(df)):
        y = df['Title'][x]
        cols.append(str(y))
    # indy = [cols.index(x) for x in cols if x[-6:]=='Season']
    # cols = cols[indy[0]+1:]
    weeks = ['W'+str(x+1)+' ' for x in range(18)]
    schedule = [i + j for i, j in zip(weeks, cols)]


    team_picked = nfl_teams.objects.get(team_acronym=acr)
    if request.method == "POST":
        form = prediction_form(request.POST)
        # form.fields['email'].required = False # this doesn't work and is obviated by making blank=True in the model
        if form.is_valid():
            instance = form.save(commit=False)
            instance.team = team_picked #the form requires the full name but the table saves the acronym
            instance.Submitted_Date = datetime.now() 
            instance.save() 
            return redirect('/results/{}'.format(acr))
    else:
        form = prediction_form() # this is the blank form, before 'submit' has been hit
    return render(request, "nfl_2021/cool_form.html", { 'season' : schedule , 'form':form, 'team':team_picked}) 

def highlight_max(cell): 
    if type(cell) == str:
        return 'background: white; color: black' #; border: 1px solid black
    if type(cell) != str and cell < 0 : 
        return 'background: white; color:red'
    else: 
        return 'background: white; color: green'

def choose_results_view(request):
    team_view_form = nfl_teams.objects.all()
    team_acr = str(request.POST.get('butts'))
    if request.method=='POST':
        return redirect('results_team', acr = team_acr)
        # return cool_form_view(request, team_acr) this is also works but the URL will only be "/cool_form"
    return render(request, "nfl_2021/team.html", {'form': team_view_form, 'phrase' : 'see what people are prognosticating'})

# https://stackoverflow.com/questions/13148429/how-to-change-the-order-of-dataframe-columns
def results_view(request, acr):
    result = pd.DataFrame(list(predicted_score.objects.all().filter(team = acr).values()))
    result = result.set_index('author')
    hawkscore_df = result.iloc[:,3:-1:2]
    oppscore_df = result.iloc[:,4:-1:2]

    url = 'https://www.pro-football-reference.com/teams/'+acr+'/2021.htm'
    table = pd.read_html(url, match='Game Results Table')
    df = table[0]
    df.columns=['Week','Day','Date','Time','BoxScore','Result','OT','Rec','Home_Away','Opp','HawkScore','OppScore','1stD','TotYd','PassY','RushY','TO','1stD','TotYd','PassY','RushY','TO','Offense','Defense','Sp. Tms']
    cols = []
    for x in range(len(df)):
        y = df['Opp'][x]
        cols.append(str(y).split()[-1])

    new_col = ['Pigskins' if word == 'Team' else 'Bye' if word == 'Week' else word for word in cols]
    weeks = ['W'+str(x+1)+' ' for x in range(18)]
    res = [i + j for i, j in zip(weeks, new_col)]

    hawkscore_df.columns = res
    bye = [x for x in hawkscore_df.columns if x[-3:]=='Bye']
    hawkscore_df.drop(columns=bye, inplace=True)

    oppscore_df.columns = res
    bye = [x for x in oppscore_df.columns if x[-3:]=='Bye']
    oppscore_df.drop(columns=bye, inplace=True)

    proggs = hawkscore_df.astype(str).add(' - ').add(oppscore_df.astype(str))
    proggs.reset_index(level=0, inplace=True)
    proggs = proggs.to_html(classes="table table-striped table-bordered table-hover", border=1,  index=False)

    spreads = hawkscore_df.subtract(oppscore_df)
    spreads.reset_index(level=0, inplace=True)

    predicted_record = {'author' : spreads['author'] , "Wins" : (spreads.iloc[:, 1:] > 0).sum(axis=1),
    "Losses" : (spreads.iloc[:, 1:] < 0).sum(axis=1), "Ties" : (spreads.iloc[:, 1:] == 0).sum(axis=1),
    "Differential" : (spreads.iloc[:, 1:]).sum(axis=1)}
    result = pd.DataFrame(predicted_record)

    average_record = pd.DataFrame(columns=['Dude', 'Wins', 'Losses', 'Differential'])
    average_record.loc[1] = ['Mean', round(result['Wins'].mean()), round(abs(17 - result['Wins'].mean())), round(result['Differential'].mean())]
    average_record.loc[2] = ['Mode', result['Wins'].mode()[0],result['Losses'].mode()[0], result['Differential'].mode()[0]]
    average_record.loc[3] = ['Median', round(result['Wins'].median()),round(abs(17 - result['Wins'].median())), round(result['Differential'].median())]
    ints = ['Wins', 'Losses', 'Differential']
    average_record[ints] = average_record[ints].astype(int)
    average_record["Differential"]=average_record["Differential"].astype(str).apply(lambda x: f"+{x}" if int(x)>0 else x)
    average_record = average_record.to_html(classes="table table-striped table-bordered table-hover", border=1,  index=False)

    result["Differential"]=result["Differential"].astype(str).apply(lambda x: f"+{x}" if int(x)>0 else x)
    result = result.sort_values(["Wins", "Differential"], ascending = (False, False))
    result = result.to_html(classes="table table-striped table-bordered table-hover", border=1,  index=False)

    spreads = spreads.style.applymap(highlight_max).hide_index().set_table_attributes('border="1" class="dataframe table table-hover table-bordered table-striped"').render()

    overunders = hawkscore_df.add(oppscore_df)
    overunders.reset_index(level=0, inplace=True)
    overunders = overunders.to_html(classes="table table-striped table-bordered table-hover", border=1,  index=False)

    return render(request, "nfl_2021/results_team.html", {'spreads' : spreads, 'overunders':overunders, 'proggs':proggs, 'result':result, 'average_record':average_record})
    
    # {'spreads_html' : spreads_html, 'record' : result.to_html(classes="table table-striped table-bordered table-hover", index=False, border=1),'average_record':average_record.to_html(classes="table table-striped table-bordered table-hover", index=False, border=1) })


def choose_accuracy_view(request):
    team_view_form = nfl_teams.objects.all()
    team_acr = str(request.POST.get('butts'))
    if request.method=='POST':
        return redirect('diffy_view_name', acr = team_acr)
    return render(request, "nfl_2021/team.html", {'form': team_view_form, 'phrase' : 'see who knew what was what'})

def diffy_view(request, acr):
    result = pd.DataFrame(list(predicted_score.objects.all().filter(team = acr).values()))
    result = result.set_index('author')
    hawkscore_df = result.iloc[:,3:-1:2]
    oppscore_df = result.iloc[:,4:-1:2]
    oppscore_df.fillna(0, inplace=True)
    hawkscore_df.fillna(0, inplace=True)
    colnames = list(oppscore_df) #need identical column names to add/ subtract df's
    hawkscore_df.columns = colnames

    guessedspreads = hawkscore_df.subtract(oppscore_df)
    guessedspreadsrows =  [[i for i in row] for row in guessedspreads.itertuples()]
    guessedoverunder = hawkscore_df.add(oppscore_df)
    guessedoverunderrows = [[i for i in row] for row in guessedoverunder.itertuples()]

    url = 'https://www.pro-football-reference.com/teams/'+acr+'/2021.htm'
    table = pd.read_html(url, match='Game Results Table')
    df = table[0]
    scores = df.iloc[:, 9:12]
    scores.columns = scores.columns.to_flat_index()
    scores.columns=(['OppName','TmScore', 'OppScore'])
    scores['actualspread']  =scores['TmScore']-scores['OppScore'] # all this to get the actual spreads
    scores['actualspread'] = scores['actualspread'].fillna('TBD')
    scores['actualoverunder']  =scores['TmScore']+scores['OppScore'] 
    scores['actualoverunder']  = scores['actualoverunder'].fillna('TBD')
    scores['actualresult'] = scores['TmScore'].astype(str).replace('\.0', '', regex=True)+'-'+scores['OppScore'].astype(str).replace('\.0', '', regex=True)
    scores['actualresult'] = scores['actualresult'].replace('nan-nan', 'TBD', regex=True)
    cols = []
    for x in range(len(scores)):
        y = scores['OppName'][x]
        cols.append(str(y).split()[-1])

    new_col = ['Pigskins' if word == 'Team' else 'Bye' if word == 'Week' else word for word in cols]
    res = [j + ' (' + TMS + ')' for  j , TMS in zip( new_col, scores['actualresult'])]

    proggs = hawkscore_df.astype(str).add(' - ').add(oppscore_df.astype(str))
    proggs.reset_index(level=0, inplace=True)
    proggs = proggs.set_index('author').T
    proggs.insert(loc=0,column ='Actual Score', value= res)
    proggs.set_index('Actual Score', inplace=True)
    proggs = proggs.to_html(classes="table table-striped table-bordered table-hover", border=1,  index=True)

    OverunderScore = {}
    for guesser in guessedoverunderrows:
        ditty = []  
        for guess,diff in zip(guesser[1:], scores['actualoverunder'].fillna('TBD')):     
            if diff == 'TBD':
                ditty.append(0)
            elif abs(guess-diff) > 21.5:
                ditty.append(75)
            elif abs(guess-diff) > 14.5:
                ditty.append(80)
            elif abs(guess-diff) > 10.5:
                ditty.append(85)    
            elif abs(guess-diff) > 7.5:
                ditty.append(90)
            elif abs(guess-diff) > 3.5:
                ditty.append(95)
            elif abs(guess-diff) >=0:
                ditty.append(100)
            else:
                ditty.append(-99)
        OverunderScore[guesser[0]] = ditty
    overundy = pd.DataFrame.from_dict(OverunderScore)
    overundy.loc['Total']= overundy.sum(skipna=True, axis=0)


    # https://stackoverflow.com/questions/58567199/memory-efficient-way-for-list-comprehension-of-pandas-dataframe-using-multiple-c/62064720
    # SP = [guessedspreads[i].values for i in guessedspreads.columns]

    SpreadAccuracyScore = {}
    for guesser in guessedspreadsrows:

        ditty = []  
        for guess,diff in zip(guesser[1:], scores['actualspread']): 
            if diff =='TBD':
                ditty.append(0)
            elif (guess*diff)>=0:  
                if abs(abs(guess)-abs(diff)) > 21.5:
                    ditty.append(75)
                elif abs(abs(guess)-abs(diff)) > 14.5:
                    ditty.append(80)
                elif abs(abs(guess)-abs(diff)) > 10.5:
                    ditty.append(85)   
                elif abs(abs(guess)-abs(diff)) > 7.5:
                    ditty.append(90)
                elif abs(abs(guess)-abs(diff)) > 3.5:
                    ditty.append(95)
                else:
                    ditty.append(100)
            else:
                ditty.append(0)

        SpreadAccuracyScore[guesser[0]] = ditty
    spready = pd.DataFrame.from_dict(SpreadAccuracyScore)
    spready.loc[ 'Total']= spready.sum(skipna=True, axis=0)
    
    
    prog_scoredboard = spready.add(overundy)
    # prog_scoredboard.sort_index(axis=0,ascending=False) 

    # res.insert(0, 'Prognosticator')
    res.append('Total')
    prog_scoredboard['Prognosticator'] = res
    print(prog_scoredboard)
    prog_scoredboard.set_index('Prognosticator', inplace=True)
    print(prog_scoredboard)
    prog_leaderboard = prog_scoredboard.T
    prog_leaderboard = prog_leaderboard[ ['Total'] + [ col for col in prog_leaderboard.columns if col != 'Total' ] ]
    # prog_leaderboard.columns = res

    prog_leaderboard.sort_values(by = ['Total'], ascending=False, inplace=True)
    prog_leaderboard  = prog_leaderboard.to_html(classes="table table-striped table-bordered table-hover", border=1,  index=True)

    # print(spready)
    # print(overundy)
    return render(request, "nfl_2021/accuracy_scores.html", {'spreaiiiis' : proggs,'prog_leaderboard': prog_leaderboard})
    