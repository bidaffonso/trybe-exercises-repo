SOMA = 0

nums = input("Insira os valores separados por um espaço: ")

array = nums.split(" ")

for num in array:
    if not num.isdigit():
        print(f"Erro ao somar valores. {num} é um valor inválido!")
    else: 
        SOMA += int(num)

print(SOMA)
