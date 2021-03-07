
// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()
 
// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function descriptMyself() {
    document.getElementById('descript').innerHTML = "Trabalhando como uma pessoa desenvolvedora.";
}

//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function changeColor() {
    document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
}

//  Crie uma função que mude a cor do quadrado vermelho para branco.

function changeColorCenter() {
    document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
}

//  Crie uma função que corrija o texto da tag <h1>.

function correction() {
    document.getElementsByTagName('h1')[0].innerHTML = 'Exercício 5.1 - JavaScript'
}

//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 
function upperCase() {
    let array = document.getElementsByTagName('p');
    for(let index = 0; index < array.length; index += 1){
        document.getElementsByTagName('p')[index].style.textTransform = 'uppercase';
    }  
}

//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function printar() {
    let array = document.getElementsByTagName('p');
    for(let index = 0; index < array.length; index += 1){
        console.log(document.getElementsByTagName('p')[index]);
    }  
}


descriptMyself();
changeColor();
changeColorCenter();
correction();
upperCase();
printar();