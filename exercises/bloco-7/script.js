const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const bubbleSort = (string) => {
  const sortedArray = Array.from(string);
      let swap;
      do {
        swap = false;
        for (let i = 1; i < sortedArray.length; ++i) {
          if (sortedArray[i - 1] > sortedArray[i]) {
            [sortedArray[i], sortedArray[i - 1]] = [sortedArray[i - 1], sortedArray[i]];
            swap = true;
          }
        }
      } while (swap)
      return `Os números ${sortedArray} se encontram ordenados de forma crescente!`;
}

console.log(bubbleSort(oddsAndEvens));
