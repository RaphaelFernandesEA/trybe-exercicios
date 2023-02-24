# Exercício 1:
# Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo:

# Entrada:
# PEDRO

# Saída:
# PEDRO
# PEDR
# PED
# PE
# P

def inverted_stair(string):
    length = len(string)
    for letter in string:
        print(string[0:length])
        length -= 1


inverted_stair("pedro")