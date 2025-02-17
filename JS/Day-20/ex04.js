const users = [
    { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
    { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
    { fullname: "Nguyen Van C", age: 19, address: "BacGiang" },
    { fullname: "Nguyen Van D", age: 21, address: "HaNoi" },
    { fullname: "Nguyen Van E", age: 18, address: "HaNoi" },
    { fullname: "Nguyen Van F", age: 32, address: "LangSon" },
];

let usersGroupByAddress = {};

for (i = 0; i < users.length; i++) {
    if (!usersGroupByAddress[users[i].address]) {
        usersGroupByAddress[users[i].address] = [];
    }
    usersGroupByAddress[users[i].address].push(users[i]);
}
console.log(usersGroupByAddress);

