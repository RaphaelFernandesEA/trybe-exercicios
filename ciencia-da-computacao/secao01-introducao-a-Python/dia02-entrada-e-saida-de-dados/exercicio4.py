# 🚀 Exercício 4:
# Dado o arquivo books no formato JSON, leia seu conteúdo e calcule a porcentagem de livros em cada categoria em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato CSV como o exemplo abaixo.

# Saída:

# categoria,porcentagem
# Python,0.23201856148491878
# Java,0.23201856148491878
# PHP,0.23201856148491878
import json
from collections import Counter
import csv

with open("books.json") as file:
    books = json.load(file)
# print(len(books)) # 431 livros

book_categories = []
for book in books:
    # print(book["categories"]) #retorna array de categorias
    for categories in book["categories"]:
        book_categories.append(categories) 


categories_counter_dict = Counter(book_categories)

with open("books_category_percentage.csv", mode="w", encoding="utf-8") as file:
    headers = ["categoria", "porcentagem"]
    
    writer = csv.DictWriter(file, fieldnames=headers)
    writer.writeheader()

    for name, value in categories_counter_dict.items():
        row = {"categoria": name, "porcentagem": value/len(books)}
        writer.writerow(row)





    

