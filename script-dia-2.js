//Exercicios de conteúdo
//1)

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//2

let indexOfPortfolio = menu.indexOf("Portfólio") ;

console.log(indexOfPortfolio);

//3

menu.push("Contato");

console.log(menu);

//1) -----Estrutura for

let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];

console.log("Lista de compras! ")

for (let i = 0; i < groceryList.length; i++) {
    console.log(groceryList[i]);
}