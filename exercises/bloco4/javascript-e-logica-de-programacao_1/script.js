//1)

let a = 4;
let b = 7;

//adicao

console.log(a + b);

//subtracao

console.log(a - b);

//multiplicacao

console.log(a * b);

//divisao

console.log(a / b);

//mod

console.log(a % b);

//2)

if (a > b) {
    console.log(a);
}else{
    console.log(b);
}

//3)

let c = 0;

if (a > b && a > c) {
    console.log(a);
}else if (b > a && b > c) {
    console.log(b);
}else{
    console.log(c);
}

//4)

if (c > 0) {
    console.log("Positivo");
}else if (c < 0) {
    console.log("Negativo");
}else {
    console.log("Zero");
}

//5)

let ang1 = 60;
let ang2 = 60;
let ang3 = 60;

if (ang1 + ang2 + ang3 == 180) {
    console.log("true");
}else {
    console.log("false");
}

//6)

let pieceName = "peao";

switch (pieceName.toLowerCase()) {
    case "rei":
        console.log("Todas as direções, somente uma casa.");
        break;
    
    case "rainha":
        console.log("Todas as direções.");
        break;
    
    case "bispo":
        console.log("Em diagonais.");
        break;

    case "cavalo":
        console.log("Em 'L', em dois por três.");
        break;
    
    case "torre":
        console.log("Em retas, nas linhas e colunas.");
        break;

    case "peão":
        console.log("Pra frente comendo nas diagonais.");
        break;

    default:
        console.log("Essa peça não existe.");

}

//7)

let nota = 100;

if (nota >= 90 && nota <= 100) {
    console.log("A");
}else if (nota >=80 && nota < 100) {
    console.log("B");
}else if (nota >=70 && nota < 100) {
    console.log("C");
}else if (nota >=60 && nota < 100) {
    console.log("D");
}else if (nota >=50 && nota < 100) {
    console.log("E");
}else if (nota < 50 && nota >= 0) {
    console.log("F");
}else {
    console.log("Erro!");
}

//8)




