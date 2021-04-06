
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, current) => 
  acc + current.split('').reduce((acc2, current2) => {
    if (current2 === 'a' || current2 === 'A') {
      return acc2 + 1;
    }
    return acc2;
  }, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);