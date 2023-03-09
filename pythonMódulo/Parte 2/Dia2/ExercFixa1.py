from collections.abc import Iterable, Iterator

nome = ["Bruno, Anna, Benicio"]

#class nomeIterator(Iterable):

lista_nomes = iter(nome)
print(next(lista_nomes))   
