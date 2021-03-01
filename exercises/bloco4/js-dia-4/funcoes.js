//Exercicio de pratica (funções)

//1)
// function paliVerify(palavra){
//   let status = false;
//   let reverso = palavra.split('').reverse().join('');
//   if (palavra === reverso){
//     status = true;
//   }
//   return status;
// }

// console.log(paliVerify('anna'));

//2)
function maiorIndex(array){
  let indexDoMaior = 0;
  for(let index = 0; index <= array.length; index += 1){
    
    if(array[index] > array[index+1]){
      indexDoMaior = index;
    }
  }
  return indexDoMaior;
}
let array = [2, 3 , 6 , 7, 10, 1];
console.log(maiorIndex(array));