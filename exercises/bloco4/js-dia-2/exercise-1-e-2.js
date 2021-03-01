// //Exercicios práticos

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1)

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

//2)

let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}

console.log(soma);

//3)


let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
    
}
let media = soma / numbers.length;


console.log(media);