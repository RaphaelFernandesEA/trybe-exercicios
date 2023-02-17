# 🚀 Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

import math


def return_biggest(a, b):
    '''Returns the biggest number'''
    if a > b:
        return a
    else:
        return b


print(return_biggest(15, 12))


# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
test_array_numbers = [5, 12, 17, 22]


def calculate_media(array):
    total = 0
    for number in array:
        total += number
    return total / len(array)


print(calculate_media(test_array_numbers))

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


def print_square(number):
    line = number * '*'
    for index in range(number):
        print(line)


print_square(6)

# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".

array_of_names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def bigger_name(names):
    bigger = ''
    for name in names:
        if len(name) > len(bigger):
            bigger = name
    return bigger


print(bigger_name(array_of_names))


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede (em m²).

def amount_of_cans(area):
    paint_coverage = area / 3
    can_capacity = 18
    can_cost = 80
    cans_quantity = paint_coverage / can_capacity
    total_expend = math.ceil(cans_quantity) * can_cost

    return (math.ceil(cans_quantity), total_expend)


print(amount_of_cans(100))


# Exercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo", caso não seja possível formar um triângulo.

# 🦜 Dica:
#   Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
#   Triângulo Equilátero: três lados iguais;
#   Triângulo Isósceles: quaisquer dois lados iguais;
#   Triângulo Escaleno: três lados diferentes.


def type_of_triangle(x, y, z):
    is_triangle = (
        x + y > z and
        y + z > x and
        x + z > y
    )
    if not is_triangle:
        print('Não é um triângulo')
    elif x == y == z:
        print('Triângulo equilátero')
    elif x == y or z == z or y == z:
        print('Triângulo isósceles')
    else:
        print('Triângulo escaleno')


type_of_triangle(4, 5, 12)