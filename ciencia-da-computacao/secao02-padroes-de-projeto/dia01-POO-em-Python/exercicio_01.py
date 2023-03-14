# 🚀 Exercício 1: Implementar o diagram de uma classe Tv

# Atributos:

# volume - será inicializado com um valor de 50 e só pode estar entre 0 e 99;

# canal - será inicializado com um valor de 1 e só pode estar entre 1 e 99;

# tamanho - será inicializado com o valor do parâmetro;

# ligada - será inicializado com o valor de False, pois está inicialmente desligado.

# Todos os atributos devem ser privados.

# Métodos:

# aumentar_volume - aumenta o volume de 1 em 1 até o máximo de 99;

# diminuir_volume - diminui o volume de 1 em 1 até o mínimo de 0;

# modificar_canal - altera o canal de acordo com o parâmetro recebido e deve lançar uma exceção (ValueError) caso o valor esteja fora dos limites;

# ligar_desligar - alterna o estado da TV entre ligado e desligado (True/False).

class TV():
    def __init__(self, volume, canal, tamanho):
        self.volume = volume or 50
        self.canal = canal or 1
        self.__tamanho = tamanho
        self.__ligada = False

    @property
    def volume(self):
        return self.__volume

    @volume.setter
    def volume(self, value):
        if 0 <= value <= 99:
            self.__volume = value
        else:
            raise ValueError

    @property
    def canal(self):
        return self.__canal
    
    @canal.setter
    def canal(self, value):
        if 1 <= value <= 99:
            self.__canal = value
        else:
            raise ValueError

    def aumentar_volume(self):
        self.__volume += 1
        if self.__volume >= 99:
            self.__volume = 99

    def diminuir_volume(self):
        self.__volume -= 1
        if self.__volume <= 0:
            self.__volume = 0

    def modificar_canal(self, value):
        if 1 <= value <= 99:
            self.__canal = value
        else:
            raise ValueError

    def ligar_desligar(self):
        if self.__ligada is True:
            self.__ligada = False
        else:
            self.__ligada = True

    def __str__(self) -> str:
        return f"""
        tv tamanhho {self.__tamanho}, ligada: {self.__ligada}
        canal: {self.__canal}
        volume:{self.__volume}
        """


tv42 = TV(30, 55, tamanho=42)
tv42.ligar_desligar()
tv42.aumentar_volume()
tv42.aumentar_volume()

tv42.modificar_canal(99)

print(tv42)



              # 🚀 Resolução com @dataclass

# from dataclasses import dataclass

# @dataclass
# class TV:
#     volume: int
#     canal: int
#     tamanho: int
#     ligada: int


