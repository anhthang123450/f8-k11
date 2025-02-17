// let a = 20;
// let b = 50;

// if (b > a) {
//     let temp = a;
//     a = b;
//     b = temp;
// }

// // khởi tạo vòng lặp 
// while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
// }

// console.log(` Ước chung lớn nhất là: ${a}`);

function countGreaterThan(arr, value) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (value < arr[i])
            count++;
    }
    return count++;
}

console.log(countGreaterThan([1, 2, 3, 5, 6, 9], 5));


