// apiScript.js   
// const fetch = require('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/';

const newFetch = () => {
  const promise = new Promise((resolve, reject) => {
    const array = Array.from(
      {length: 10}, () => Math.floor(Math.random() * 50) +1
    );
    const result = array.map((number) => number * number)
      .reduce((result, number) => result + number);
    
    (result < 8000) ? resolve() : reject();
  });
  const div = [2, 3, 5, 10];
  promise
    .then((result) => div.map((number) => result / number))
    .then((array) => array.reduce((acc, current) => acc + current, 0))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

// const fetchJoke = () => {
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };

//   fetch(API_URL, myObject)
//     .then(response => response.json())
//       .then((data) => {
//         document.getElementById('jokeContainer').innerHTML = data.joke;
//       });
// };

newFetch();
// fetchJoke();
// window.onload = () => fetchJoke();