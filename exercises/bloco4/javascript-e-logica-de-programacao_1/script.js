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