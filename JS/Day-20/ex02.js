const membersK11 = ["Duc Anh", "Minh", "Do",
    "Trung", "Thang", "Viet Anh"];

console.log(membersK11);
membersK11.unshift("ABC");
console.log(membersK11);
membersK11.unshift("x", "y", { username: "F8" });
console.log(membersK11);

membersK11.shift();
console.log(membersK11);

const list = [1, 2, 3, 4];
console.log(list.shift());
console.log(list);
console.log(list.push("Hoang", "Trung"));
console.log(list);

// list.pop();
console.log(list.pop());
console.log(list);


