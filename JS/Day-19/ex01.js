// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }


// Tam giác
// function printTriangle(n, char) {
//     let content = "";
//     for (let i = 1; i <= n; i++) {
//         content += char;
//         console.log(content);
//     }
// }
// printTriangle(5, "#")


// function divisibleNumber(i, n) {
//     for (j = 1; j <= n; j++) {
//         if (j % i === 0) {
//             console.log(j);
//         }
//     }
// }
// divisibleNumber(4, 100)


//
function checkPrimeNumber(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function printPrime(n) {
    for (let i = 2; i <= n; i++) {
        checkPrimeNumber(i) && console.log(i);
    }
}
printPrime(100);
