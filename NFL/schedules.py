import pandas as pd
from datetime import datetime
import numpy as np
import requests
from bs4 import BeautifulSoup
import requests
import pandas as pd 
import csv
import json


# # https://stackoverflow.com/questions/42285417/how-to-preserve-links-when-scraping-a-table-with-beautiful-soup-and-pandas
# r = requests.get('https://www.pro-football-reference.com/teams/')
# soup=BeautifulSoup(r.text,'html.parser')
# table = soup.find_all('table')[0] #reqires the [0] for some reason
# links = []
# for tr in table.findAll("tr"):
#     trs = tr.findAll("th")
#     for each in trs:
#         try:
#             # the find('a') refers to an HTML tag
#             links.append([str(each.find('a')['href']).split('/')[2],str(each.find('a')).split('>')[1].replace('</a','')])
#         except:
#             pass

# [print(str(item[0:])[1:-1]) for item in links]

league = ['sea',
'sfo',
'chi',
'cin',
'buf',
'den',
'cle',
'tam',
'crd',
'sdg',
'kan',
'clt',
'was',
'dal',
'mia',
'phi',
'atl',
'nyg',
'jax',
'nyj',
'det',
'gnb',
'car',
'nwe',
'rai',
'ram',
'rav',
'nor',
'pit',
'htx',
'oti',
'min']
teams = [
'Seahawks'
,'49ers'
,'Bears'
,'Bengals'
,'Bills'
,'Broncos'
,'Browns'
,'Buccaneers'
,'Cardinals'
,'Chargers'
,'Chiefs'
,'Colts'
,'Commandos'
,'Cowboys'
,'Dolphins'
,'Eagles'
,'Falcons'
,'Giants'
,'Jaguars'
,'Jets'
,'Lions'
,'Packers'
,'Panthers'
,'Patriots'
,'Raiders'
,'Rams'
,'Ravens'
,'Saints'
,'Steelers'
,'Texans'
,'Titans'
,'Vikings'

]

schedule_dict = {}
for x ,y  in zip(league, teams):

    url = requests.get('https://www.pro-football-reference.com/teams/'+x+'/2022.htm')

    table = pd.read_html(url.text, match='Game Results Table')

    df = pd.DataFrame(table[0])
    df = df.iloc[5:]

    df.columns=['Week','Day','Date','Time','Home_Away','Opp','x']
    df.loc[df['Home_Away'].isnull(), 'Home_Away'] = 'VS.'
    df.loc[df['Home_Away'] == '@', 'Home_Away'] = 'AT'
    df['Opp'] = df['Opp'].replace(['Arizona Cardinals'
,'Atlanta Falcons'
,'Baltimore Ravens'
,'Buffalo Bills'
,'Carolina Panthers'
,'Chicago Bears'
,'Cincinnati Bengals'
,'Cleveland Browns'
,'Dallas Cowboys'
,'Denver Broncos'
,'Detroit Lions'
,'Green Bay Packers'
,'Houston Texans'
,'Indianapolis Colts'
,'Jacksonville Jaguars'
,'Kansas City Chiefs'
,'Los Angeles Chargers'
,'Los Angeles Rams'
,'Las Vegas Raiders'
,'Miami Dolphins'
,'Minnesota Vikings'
,'New Orleans Saints'
,'New England Patriots'
,'New York Giants'
,'New York Jets'
,'Philadelphia Eagles'
,'Pittsburgh Steelers'
,'Seattle Seahawks'
,'San Francisco 49ers'
,'Tampa Bay Buccaneers'
,'Tennessee Titans'
,'Washington Football Team'
],
[
'Cardinals'
,'Falcons'
,'Ravens'
,'Bills'
,'Panthers'
,'Bears'
,'Bengals'
,'Browns'
,'Cowboys'
,'Broncos'
,'Lions'
,'Packers'
,'Texans'
,'Colts'
,'Jaguars'
,'Chiefs'
,'Chargers'
,'Rams'
,'Raiders'
,'Dolphins'
,'Vikings'
,'Saints'
,'Patriots'
,'Giants'
,'Jets'
,'Eagles'
,'Steelers'
,'Seahawks'
,'49ers'
,'Buccaneers'
,'Titans'
,'Commandos'
])
    df['Title'] = df['Home_Away']+' '+df['Opp']+' -'+df['Day']+' '+df['Date']+' @ '+df['Time']

    df.fillna('Bye Week')
    schedjy = df["Title"].values.tolist()

    for game in schedjy:
        if str(game).endswith('Regular Season'):
            schedjy.pop(0)
    schedjy = ['Bye Week' if str(x)=='nan' else x for x in schedjy]
    # print(split(schedule_dict[y]) 
    schedule_dict[y] = schedjy

# with open('2022ScheduleLeague.csv', 'w') as f: 
#     write = csv.writer(f) 
#     write.writerow(ol_list) 



with open('NFL_Schedule2022.json', 'w') as fp:
    json.dump(schedule_dict, fp)
