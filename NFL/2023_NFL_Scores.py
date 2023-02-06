from datetime import datetime
import pandas as pd
import numpy as np
import requests
from bs4 import BeautifulSoup
import requests
import pandas as pd 
import csv
import json

# https://www.kindacode.com/article/vs-code-how-to-collapse-expand-blocks-of-code/#:~:text=In%20case%20you%20want%20to%20collapse%20all%20code,all%3A%20Ctrl%20%2B%20K%20then%20Ctrl%20%2B%20J
league = [
    # 'sea',
    # 'sfo',
    # 'chi',
    # 'cin',
    # 'buf',
    # 'den',
    # 'cle',
    # 'tam',
    # 'crd',
    # 'sdg',
    # 'kan',
    # 'clt',
    # 'was',
    # 'dal',
    # 'mia',
    # 'phi',
    # 'atl',
    # 'nyg',
    # 'jax',
    # 'nyj',
    # 'det',
    # 'gnb',
    # 'car',
    # 'nwe',
    # 'rai',
    # 'ram',
    # 'rav',
    # 'nor',
    # 'pit',
    'htx',
    'oti',
    'min']
teams = [
# 'Seahawks'
# ,'49ers'
# ,'Bears'
# ,'Bengals'
# ,'Bills'
# ,'Broncos'
# ,'Browns'
# ,'Buccaneers'
# ,'Cardinals'
# ,'Chargers'
# ,'Chiefs'
# ,'Colts'
# ,'Commandos'
# ,'Cowboys'
# ,'Dolphins'
# ,'Eagles'
# ,'Falcons'
# ,'Giants'
# ,'Jaguars'
# ,'Jets'
# ,'Lions'
# ,'Packers'
# ,'Panthers'
# ,'Patriots'
# ,'Raiders'
# ,'Rams'
# ,'Ravens'
# ,'Saints'
# ,'Steelers'
'Texans'
,'Titans'
,'Vikings'
]

# league = ['cin']
# teams = ['cinci']

overunder_dict = {}
spread_dict = {}
for x ,y  in zip(league, teams):
    url = requests.get('https://www.pro-football-reference.com/teams/'+x+'/2022.htm')
    table = pd.read_html(url.text, match='Game Results Table')
    df = pd.DataFrame(table[0])
    df = df.iloc[:18,10:12]
    

    df.columns=['TeamScore','OppScore']
    df.loc[df["TeamScore"] == "Canceled", "TeamScore"] = 0
    df.loc[df["OppScore"] == "Canceled", "OppScore"] = 0
    df = df.apply(pd.to_numeric)

    df['OverUnder'] = df['TeamScore']+df['OppScore']
    overunder = df["OverUnder"].values.tolist()
    overunder_dict[y] = overunder

    df['Spread'] = df['TeamScore']-df['OppScore']
    spread = df["Spread"].values.tolist()
    spread_dict[y] = spread

    with open('NFL_OverUnder2_2022.json', 'w') as fp:
        json.dump(overunder_dict, fp)
    with open('NFL_Spread2_2022.json', 'w') as fp:
        json.dump(spread_dict, fp)
