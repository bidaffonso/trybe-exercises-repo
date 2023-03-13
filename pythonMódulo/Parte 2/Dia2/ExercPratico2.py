from collections.abc import Iterable, Iterator

class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%s de %s>' % (self.valor, self.naipe)

class Baralho(Iterable):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)
    
    def __iter__(self):
        return BaralhoIterator(self._cartas)
    
class BaralhoInverso(Baralho):

    def __iter__(self):
        return BaralhoInversoIterator(self._cartas)
    
class BaralhoIterator(Iterator):
    def __init__(self, cartas):
        self.cartas = cartas
        self._pos = 0

    def __next__(self):
        try:
            carta = self.cartas[self._pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos += 1
            return carta
        
class BaralhoInversoIterator(Iterator):
    def __init__(self, cartas):
        self.cartas = cartas
        self._pos = 51

    def __next__(self):
        try:
            carta = self.cartas[self._pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos -= 1
            return carta
        
baralho_novo = Baralho()
for card in baralho_novo:
    print(card)

print("///////////////////////////////////////////////////////////////////////////////////")

baralho_inverso_novo = BaralhoInverso()
for card in baralho_inverso_novo:
    print(card)
