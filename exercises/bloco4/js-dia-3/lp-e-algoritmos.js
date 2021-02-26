//Atividade pratica

//1)

// let n = 3;


// if (n > 1) {

//     for (let j = 0; j < n; j += 1) {
        
//         let square = "*";
        
//         for (let i = 1; i < n; i += 1) {
            
//             square += "*";
                
//         }

//         console.log(square);

//     }
    
// }

//2)

// let n = 5;

// if (n > 1) {
        
//     let square = "";
    
    
//     for (let i = 1; i <= n; i += 1) {
        
//         if (i == 1 ){

//             console.log(square);

//         }

//             square += "*";

//             console.log(square);
            
//     }

// }
    

//3)

let n = 5;
let square = "";
let position = n;

if (n > 1) {
    for (let index1 = 1; index1 <= n; index1 += 1) {
        for (let index2 = 0; index2 <= n; index2 += 1 ){
            if(index2 < position) {
                square = square + " ";
            } else {
                square = square + "*";
            }
        }

        console.log(square);
        square = "";
        position -= 1;

    }
}

//4)


