let array = [];

for (let index = 1; index <= 25; index += 1) {
    array.push(Math.ceil(Math.random() * 10));
}

console.log(array);
console.log(array.length);