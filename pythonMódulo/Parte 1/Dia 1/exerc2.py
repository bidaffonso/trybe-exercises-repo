def media(numeros):
    total = 0
    for num in numeros:
        total += num
    return total / len(numeros)

print(media([3, 7, 9, 1, 4]))
