let users = [
    { fullname: "Nguyen Van A", age: 20 },
    { fullname: "Nguyen Van B", age: 22 },
    { fullname: "Nguyen Van C", age: 23 },
    { fullname: "Nguyen Van D", age: 25 },
    { fullname: "Nguyen Van E", age: 18 }
];
console.log(users);

console.log("Mảng sau khi đảo ngược (Cách 1)");

let newUsers = [];
for (let i = 0; i < users.length; i++) {
    newUsers.unshift(users[i]);
}
console.log(newUsers);

console.log("Mảng sau khi đảo ngược (Cách 2)");

let newUsers2 = [];
for (let i = users.length - 1; i >= 0; i--) {
    newUsers2.push(users[i]);
}
console.log(newUsers2);

console.log("Lấy ra tên thành viên có tuổi >= 20");
let newUsers3 = [];
for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 20) {
        newUsers3.push(users[i])
    }
}
console.log(newUsers3);





