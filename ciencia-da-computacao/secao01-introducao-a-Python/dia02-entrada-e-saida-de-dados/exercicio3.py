# Exercício 3:
# Modifique o exercício anterior para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada palavra em uma linha.
import random

file = open("exercicio3.txt", mode="r")
content = file.read()
fruits = content.splitlines()
file.close()

MAX_ATTEMPTS = 3


def secret_word(array):
    fruit = random.choice(array)
    scrambled_fruit = "".join(random.sample(fruit, len(fruit)))
    return fruit, scrambled_fruit


attempts = []
guesses = []


def guess_the_word():
    guess = input(f"Adivinhe o nome da fruta:\n {scrambled_word}\n")
    guesses.append(guess)
    attempts.append(1)
    if len(attempts) <= MAX_ATTEMPTS and check_result(word, guesses):
        pass
    elif check_result(word, guesses) is False and len(attempts) < MAX_ATTEMPTS:
        guess_the_word()
    else:
        print(f"Você não acertou. 😥 \n A resposta era: {word}")


def check_result(word, guesses):
    if word in guesses:
        print(f"Parabéns!!! Você acertou!!!👏👏👏\n O nome da fruta é {word}")
        return True
    else:
        return False


if __name__ == "__main__":
    word, scrambled_word = secret_word(fruits)
    guesses = guess_the_word()

