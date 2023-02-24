# Exercício 2:
# Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.

# 🦜 Para embaralhar uma palavra faça: scrambled_word = "".join(random.sample(word, len(word)))

# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: random.choice(["word1", "word2", "word3"]) -> "word2".

import random

fruits = ["abacaxi", "uva", "maçã", "laranja", "banana",
          "melancia", "pera", "tomate", "melão", "tangerina", "morango",
          "toranja", "framboesa", "cereja", "mirtilo"]
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