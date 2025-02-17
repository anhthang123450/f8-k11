const users = [
    { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
    { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
    { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
    { fullname: "Nguyen Van D", age: 18, address: "HaNoi" },
    { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
];

const userList = ["Hoang", "Dung", "Trung", NaN, "Trung", undefined];
const result1 = userList.indexOf("Dung");
const result2 = userList.indexOf("Dung");
const result3 = userList.indexOf();
console.log(result2);
console.log(result3);

console.log(userList.lastIndexOf("Trung"));

console.log(userList.includes("Trung"));
console.log(userList.includes("Thang"));
console.log(userList.includes(NaN));
console.log(userList.includes(undefined));

const myString = userList.join("-");
const myString1 = userList.join();// Nối với dấu ,
console.log(myString);
console.log(myString1);

const myArr = myString1.split(",");
console.log(myArr);

const paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, accusantium.";

// const words = paragraph.split(" ");
// console.log(words);

const words1 = paragraph.reverse();
console.log(words1.reverse);



