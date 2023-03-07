def maior_nome(lista):
    maior = lista[0]
    for nome in lista:
        if len(nome) > len(maior):
            maior = nome
    return maior

print(maior_nome(["Bruno", "Anna", "Ivânia", "Allan", "Benício"]))
