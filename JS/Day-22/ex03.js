const userInfor = {
    username: "mthang"
};

const obj = {
    address: "Ha Noi",
};

const userInforCopy = { ...userInfor, password: "123", ...obj };

console.log(userInforCopy);
console.log(userInfor);
console.log(userInfor === userInforCopy);

// Copy object voi Spread Operater.


const { username, ...other } = userInforCopy;

console.log(username);
console.log(other);



