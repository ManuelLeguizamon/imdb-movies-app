import pandas as pd

df = pd.read_csv("./imdb_top_1000.csv")  
df = df.drop(columns=["Star4", "No_of_Votes", "Certificate", "Poster_Link"])
df.rename(columns={"Series_Title": "Name"}, inplace=True)
df.rename(columns={"IMDB_Rating": "Rating"}, inplace=True)
df.to_json("imdb_movies_clean.json", orient="records", indent=2)
