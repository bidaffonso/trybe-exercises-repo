// // Exercicio de pratica (funções)

// // 1)
// function paliVerify(palavra){
//   let status = false;
//   let reverso = palavra.split('').reverse().join('');  
//   //fonte: para reverter a palavra usei trecho de codigo obtido em: https://www.devmedia.com.br/forum/inverter-string-no-javascript/570951

//   if (palavra === reverso){
//     status = true;
//   }
//   return status;
// }

// console.log(paliVerify('anna'));

// // 2)
// function maiorIndex(array){
//   let indexDoMaior = 0;
//   for(let index = 0; index <= array.length; index += 1){
    
//     if(array[index] > array[indexDoMaior]){
//       indexDoMaior = index;
//     }
//   }
//   return indexDoMaior;
// }
// let array = [2, 3 , 6 , 7, 10, 1, 20];
// console.log(maiorIndex(array));

// // 3)
// function menorIndex(array){
//   let indexDoMenor = 0;
//   for(let index = 0; index <= array.length; index += 1){
    
//     if(array[index] < array[indexDoMenor]){
//       indexDoMenor = index;
//     }
//   }
//   return indexDoMenor;
// }
// let array = [2, 4, 6, 7, 10, 0, -3, -7];
// console.log(menorIndex(array));

//4)
// function contaLetras(nomes){
//   let nomeMaior;
//   let numLetras = 0;
//   // let qntLetras = nomes.length;
//   for (let index = 0; index < nomes.length; index += 1){
//     if (nomes[index].length > numLetras){
//       numLetras = nomes[index].length;
//       nomeMaior = nomes[index];
//     }
//   }
//   return nomeMaior;
// }
// let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 
// console.log(contaLetras(nomes));

//5)
// function repeteMais(numeros){
//   let contRepetido = 0;
//   let cont = 0;
//   let indexNumeroRepetido = 0;
//   for (let index in numeros){
//     let numeroVerificado = numeros[index];
//     for (let index2 in numeros){
//       if (numeroVerificado == numeros[index2]){
//         cont += 1;
//       }
//     }
//     if (cont > contRepetido){
//       contRepetido = cont;
//       indexNumeroRepetido = index;
//     }
//     cont = 0;
//   }
//   return numeros[indexNumeroRepetido];
// }
// let numeros = [2, 3, 2, 5, 8, 2, 3, 3, 5, 3];
// console.log(repeteMais(numeros));

//6)
// function somaTudo(numero){
//   let resultado = 0;
//   for (let index = 1; index <= numero; index += 1){
//     resultado = resultado + index;
//   }
//   return resultado;
// }
// console.log(somaTudo(5));

//7)
function verificaFimPalavra(word, ending){
  word = word.split("");
  ending = ending.split("");
  status = true;
  for (let index = 0; index < ending.length; index += 1){
    if(word[word.length - ending.length+index] != ending[index]){
      status = false;
    } 
  }
  return status;
}

console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra("joaofernando", "fernan"));