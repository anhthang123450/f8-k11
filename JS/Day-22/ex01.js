// const userInfor = {
//     email: "thangnm@gmail.ocm",
//     age: 21,
//     username: "MinhThang"
// }

// console.log(userInfor);
// console.log(typeof userInfor);

// const obj = new Object({
//     email: "thangnm@gmail.com",
//     age: 21,
//     fullname: "Nguyen Minh Thang",
//     learn: function (lesson, time) {
//         console.log(`${this.fullname} hoc ${lesson} luc ${time}`);
//     }
// });

// console.log(obj);

// obj.learn("JS co ban", "Trua nay")

// obj.avatar = "https://anhdaidien.png";
// console.log(obj);

// obj['So thich'] = ["an", "ngu"];
// console.log(obj);

// let myKey = "hobbies";

// obj[myKey] = ["reading book", "play videogame"];
// console.log(obj);

const arrayInfor = [
    ["username", "hoangnm"],
    ["email", "hoang@gmail.com"],
    ["password", "123456"],
];


const objInfo = {};
// for (let i = 0; i < arrayInfor.length; i++) {
//     objInfo[{ objInfo[i][0] } = arrayInfor[i][1]]
// }
// console.log(objInfo);

for (const item of arrayInfor) {
    objInfo[item[0]] = item[1];
}
console.log(objInfo);

const myCar = {
    brand: "Huyndai",
    name: "Xforce",
    color: "black",
    version: 2023
}

for (const key in myCar) {
    console.log(`Gia tri cua ${key} la ${myCar[key]}`);
}

console.log(myCar?.price);
console.log(myCar.price ? myCar.price : "Khong co thuoc tinh nay");

console.log(Object.keys(myCar));
console.log(Object.entries(myCar));