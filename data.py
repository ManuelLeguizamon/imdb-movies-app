import pandas as pd

df = pd.read_csv("./imdb_top_1000.csv")  
df = df.drop(columns=["Poster_Link", "Star4"])
df.to_json("imdb_movies.json", orient="records", indent=2)
