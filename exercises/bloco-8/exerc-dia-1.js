//  Ex 1:

// const newEmployees = (employeeGen) => {
//   const employees = {
//     id1: employeeGen('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
//     id2: employeeGen('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
//     id3: employeeGen('Carla Paiva')// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
//   }
//   return employees;
// };

// const employeeGen = (fullName) => {
//   const email = { fullName, email: `${fullName.toLowerCase().split(' ').join('_')}@trybe.com` };
//   return email;
// };

// console.log(newEmployees(employeeGen));

//  Ex 2:

// const resultadoLoteria = (numAposta, checaNum) => {
//   const numSorteado = Math.floor((Math.random() * 5) + 1);
//   console.log(numSorteado);
//   if (checaNum(numAposta, numSorteado) === true) {
//     return 'Parabéns, você ganhou!';
//   } else {
//     return 'Tente novamente';
//   };
  
// };

// const checaNum = (numAposta, numSorteado) => numAposta === numSorteado;

// console.log(3);
// console.log(resultadoLoteria(3, checaNum));

//  Ex 3:

// const gabarito = 'hello world!';
// const resposta = 'Hello World!';

// const avaliador = (gabarito) => (resposta) => gabarito === resposta.toLowerCase();

// console.log(avaliador(gabarito)(resposta));

//  Ex 4:

const gabarito = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const respostas = ['a', 'n.a', 'd', 'd', 'n.a', 'f', 'g', 'h', 'j', 'j'];

const resultadoProva = (gabarito, respostas, avaliador) => {
  let count = 0;
  for (let index = 0; index < respostas.length; index += 1) {
    const resultadoAvaliador = avaliador(gabarito[index], respostas[index]);
    count += resultadoAvaliador;
  }
  return count;
};

console.log(resultadoProva(gabarito, respostas, (gab, alu) => {
  if (alu === gab) {
    return 1;
  } if (alu === 'n.a') {
    return 0;
  } else {
    return -0.5;
  }
}));
