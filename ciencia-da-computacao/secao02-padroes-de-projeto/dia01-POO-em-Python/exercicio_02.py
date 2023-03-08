# Exercício 2: Defina uma classe Estatistica que calcule média, mediana e moda de uma lista de números.

from dataclasses import dataclass


@dataclass
class Estatistica:
    @classmethod
    def media(cls, numbers):
        total = 0
        for number in numbers:
            total += number
        return total / len(numbers)

    def mediana(cls, numbers):
        array = sorted(numbers)
        print(array)
        index = ''
        if len(numbers) % 2 != 0:
            index = len(numbers) // 2
            return array[index]
        else:
            index = len(numbers) // 2
            result = (array[index] + array[index - 1]) // 2
            return result

    def moda(cls, numbers):
        # https://cienciaprogramada.com.br/2022/04/funcao-max-em-python/
        result = max(numbers, key=numbers.count)
        return result


array = [1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5]

estatistica = Estatistica()
print(estatistica.moda(array))
