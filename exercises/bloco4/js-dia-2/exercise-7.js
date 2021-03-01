let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = numbers.length;

for (let index = 0; index < numbers.length; index += 1) {
    
    if (numbers[index] < menor) {
        menor = 0;
        menor += numbers[index];
    }
}
console.log(menor);