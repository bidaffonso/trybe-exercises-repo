//Exercicios de fixacao do conteudo

//Objetos

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 },
}

console.log('A Jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor jogadora do mundo por ' + player.bestInTheWorld.length);

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de Ouro, e ' + player.medals.silver + ' medalas de Prata.');

function fullName (player) {
  playerChange = player;
  playerChange.fullName = playerChange.name + ' ' + playerChange.lastName;

  return playerChange.fullName;
}


console.log('A Jogadora ' + fullName(player) + ' tem ' + player.age + ' anos de idade.');
