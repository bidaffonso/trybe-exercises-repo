let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
let mesage;

for (let index = 0; index < numbers.length; index += 1) {
    
    soma += numbers[index];
    
    let media = soma / numbers.length;
    if (media > 20) {
        mesage = "O Valor da média é maior que 20";
    }else {
        mesage = "O Valor da média é menor ou igual a 20";
    }
    
}
console.log(mesage);