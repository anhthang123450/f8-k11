const myStudents = ["Do", "Duc Anh", "Trung", "Phong"];

// console.log(myStudents.slice(2));
// console.log(myStudents.slice(3, 1));

// const result = myStudents.splice(3, 1);
// console.log(result);
// console.log(myStudents);

// const arr = [1, 2, 3, 4];

// const result2 = arr.splice(2, 1, 100, "JS", "HtML");
// console.log(result2);
// console.log(arr);

const myArr = ["Hoang", 0, null, "F8", "Hoc lap trinh", 100, undefined];

// for (let arr of myArr) {
//     if (!arr) {
//         return myArr.splice(arr, 1);
//     }
// }

for (let i = 0; i < myArr.length; i++) {
    if (!myArr[i]) {
        myArr.splice(i, 1)
        console.log(myArr);
        i--;
    }
}
console.log(myArr);