let array = [];

for (let index = 1; index <= 25; index += 1) {
    array.push(Math.ceil(Math.random() * 10));
}

console.log(array);
console.log(array.length);

let divisao = [];

for (let index2 = 0; index2 < array.length; index2 += 1) {
    divisao.push(array[index2] / 2);
}

console.log(divisao);