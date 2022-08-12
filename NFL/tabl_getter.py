from bs4 import BeautifulSoup
import requests
import pandas as pd 

https://stackoverflow.com/questions/42285417/how-to-preserve-links-when-scraping-a-table-with-beautiful-soup-and-pandas
r = requests.get('https://www.pro-football-reference.com/teams/')
soup=BeautifulSoup(r.text,'html.parser')
table = soup.find_all('table')[0] #reqires the [0] for some reason
links = []
for tr in table.findAll("tr"):
    trs = tr.findAll("th")
    for each in trs:
        try:
            # the find('a') refers to an HTML tag
            links.append([str(each.find('a')['href']).split('/')[2],str(each.find('a')).split('>')[1].replace('</a','')])
        except:
            pass

# [print(str(item[0:])[1:-1]) for item in links]

# url = 'https://www.pro-football-reference.com/teams/sea/2021.htm'
# table = pd.read_html(url, match='Game Results Table')
# df = table[0]
# df.columns=['Week','Day','Date','Time','BoxScore','Result','OT','Rec','Home_Away','Opp','HawkScore','OppScore','1stD','TotYd','PassY','RushY','TO','1stD','TotYd','PassY','RushY','TO','Offense','Defense','Sp. Tms']
# df.loc[df['Home_Away'].isnull(), 'Home_Away'] = 'VS.'
# df.loc[df['Home_Away'] == '@', 'Home_Away'] = 'AT'
# df['Title'] = df['Home_Away']+' '+df['Opp']+' -'+df['Day']+' '+df['Date']+' @ '+df['Time']
# cols = []
# for x in range(len(df)):
#     y = df['Title'][x]
#     cols.append(str(y))

# weeks = ['W'+str(x+1)+' ' for x in range(18)]
# schedule = [i + j for i, j in zip(weeks, cols)]
# print(schedule)



url = 'https://www.pro-football-reference.com/teams/sea/2021.htm'
table = pd.read_html(url, match='Game Results Table')
df = table[0]

#Part 1
print(type(df))
print(df.columns)
print(df.index)
print(df.loc[ :, ( 'Score', 'Tm')]) #choose combos that make sense from the index list of tuples
# Part 2
df = df.T # you can flip it around
print(df)
print(df.loc[( 'Score', 'Tm'), :]) # and make the columns / rows switch in the loc
print(df.loc['Score', :])
print(df.loc[(slice(None) , 'Opp'), :])
