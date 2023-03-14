from abc import ABC, abstractmethod


class Geometric_figure(ABC):
    @abstractmethod
    def area():
        pass

    @abstractmethod
    def perimeter():
        pass


class Square(Geometric_figure):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side * self.side

    def perimeter(self):
        return self.side * 4


square1 = Square(5)
print(square1.area())
print(square1.perimeter())


class Rectangle(Geometric_figure):
    def __init__(self, base, height):
        self.base = base
        self.height = height

    def area(self):
        return self.base * self.height

    def perimeter(self):
        return (self.base + self.height) * 2


rectangle1 = Rectangle(5, 3)
print(rectangle1.area())
print(rectangle1.perimeter())


class Circle(Geometric_figure):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius ** 2

    def perimeter(self):
        return 2 * 3.14 * self.radius


circle1 = Circle(5)
print(circle1.area())
print(circle1.perimeter())