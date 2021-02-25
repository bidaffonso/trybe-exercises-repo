//1)

let a = 3;
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

let c = 5;

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

let n1 = 2;
let n2 = 1;
let n3 = 4;

if ((n1 % 2 == 0) || (n2 % 2 == 0) || (n3 % 2 == 0)) {
    console.log("true");
}else{
    console.log("false");
}

//9)

if ((n1 % 2 != 0) || (n2 % 2 != 0) || (n3 % 2 != 0)) {
    console.log("true");
}else{
    console.log("false");
}

//10)

let valorCusto = 10;
let valorVenda = 20;
let custoTotal = valorCusto + valorCusto * 0.20;

if (custoTotal > 0 && valorVenda > 0) {
    let custo = custoTotal * 1000;
    let venda = valorVenda * 1000;
    console.log("Lucro: ", venda - custo);
}else {
    console.log("Erro!");
}

//11)

let salario = 6000;


switch (true) {
    case (salario <= 1556.94):
        
        salario = salario - salario * 0.08;
        console.log("O salário liquido é: ", salario);
        break;
    
    case (salario > 1556.94 && salario <= 2594.92):
        
        salario = salario - salario * 0.09;
        console.log("O salario após dedução do inss é: ", salario);
        
        if (salario <= 1903.98) {
            
            console.log("O salário liquido é: ", salario);
        
        }else {
            
            let ir;
            ir = salario * 0.075 - 142.80;
            salario = salario - ir;
            console.log("O salário liquido é: ", salario);
        
        }
        break;


    case (salario > 2594.92 && salario <= 5189.82):
        
        salario = salario - salario * 0.11;
        console.log("O salario após dedução do inss é: ", salario);

        if (salario <= 2826.65) {
            
            let ir;
            ir = salario * 0.075 - 142.80;
            salario = salario - ir;
            console.log("O salário liquido é: ", salario);
        
        }else if (salario > 2826.65 && salario <= 3751.05) {
            
            let ir;
            ir = salario * 0.15 - 354.80;
            salario = salario - ir;
            console.log("O salário liquido é: ", salario);

        }else if (salario > 3751.05 && salario <= 4664.68) {
            
            let ir;
            ir = salario * 0.225 - 636.13;
            salario = salario - ir;
            console.log("O salário liquido é: ", salario);
            
        }else {
            
            let ir;
            ir = salario * 0.275 - 869.36;
            salario = salario - ir;
            console.log("O salário liquido é: ", salario);

        }

        break;

    default:
        
        salario = salario - 570.88;
        console.log("O salario após dedução do inss é: ", salario);

        let ir;
        ir = salario * 0.275 - 869.36;
        salario = salario - ir;
        console.log("O salário liquido é: ", salario);


}







