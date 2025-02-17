const obj1 = {
    email: "hoang@gmail.com",
    password: "123456",
    addres: "Ha Noi",
    age: undefined,
    greet() {
        console.log("xin chao");
    },
};

let myJSON = JSON.stringify(obj1);
console.log(myJSON);
console.log(JSON.parse(myJSON));

const arr1 = [1, 2, 3, 4, 5];
console.log(JSON.stringify(arr1));
console.log(JSON.parse(JSON.stringify(arr1)));
console.log(JSON.stringify([]));
console.log(JSON.stringify(null));
console.log(JSON.stringify(NaN));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(undefined));
console.log(
    JSON.stringify(function sum(a, b) {
        return a + b;
    })
);
console.log(JSON.stringify(Infinity));
console.log(JSON.stringify(-Infinity));
console.log(JSON.stringify(Math.random()));

export const a = 10;
export const b = 20;

function sum(a, b) {
    return a + b;
}

// export {sum};
export default sum;
