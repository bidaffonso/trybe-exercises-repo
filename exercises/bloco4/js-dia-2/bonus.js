//Exercicio bonus

// let array = [6, 78, 13, 8, 14, 1, 77, 125];



// for (let i = 1; i < array.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (array[i] < array[j]) {
//         let position = array[i];
  
//         array[i] = array[j];
//         array[j] = position;
//       }
//     }
//   }

// console.log(array);

//1)

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// console.log(numbers);

// for (let index1 = 1; index1 < numbers.length; index1 += 1) {
//     for (let index2 = 0; index2 < index1; index2 += 1) {
//         if (numbers[index1] < numbers[index2]) {
//             let aux = numbers[index1];
//             numbers[index1] = numbers[index2];
//             numbers[index2] = aux;
//         }
//     }
// }
// console.log(numbers);

// //2)


// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// console.log(numbers);

// for (let index1 = 1; index1 < numbers.length; index1 += 1) {
//     for (let index2 = 0; index2 < index1; index2 += 1) {
//         if (numbers[index1] > numbers[index2]) {
//             let aux = numbers[index1];
//             numbers[index1] = numbers[index2];
//             numbers[index2] = aux;
//         }
//     }
// }
// console.log(numbers);

//3)

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (let index1 = 1; index1 < numbers.length; index1 += 1) {
    for (let index2 = 0; index2 < index1; index2 += 1) {
        if (index1 < numbers.length) {
            newNumbers.push(numbers[index2] * numbers[index1]);
        } else {
            newNumbers.push(numbers[index2] * 2);
        }
    }
}

console.log(newNumbers);






// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]