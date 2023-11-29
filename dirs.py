import os 

# how to iterate dirs and save to list
games = []

for game in os.listdir():
  games.append(game)

print(games)