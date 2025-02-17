let myNumber = 10;
myNumber = 20;
console.log(myNumber);

// const userInfor = {
//     email: "thangnm@gmail.com",
// };

// const user2Infor = userInfor;
// user2Infor.password = "123456";
// console.log(user2Infor);

// console.log(userInfor);


const userInfor = {
    email: "thangnm@gmail.com",
    password: "11111"
};

const user2Infor = {
    password: "123456",
    age: 30
};

const newuserInfor = Object.assign(userInfor, user2Infor, { age: 32 });
console.log(newuserInfor);

const userInforA = Object.assign({}, userInfor);
userInforA.age = 100;
console.log(userInforA, userInfor);
