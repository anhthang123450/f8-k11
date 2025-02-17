const arr = [1, 2, 3, 5, 6, 10];

// const result = arr.find((item) => item > 10);
// console.log(result);
// console.log(arr);

// const result2 = arr.findLast((item) => item > 10);
// console.log(result2);
// console.log(arr);

// const result3 = arr.findIndex((item) => item > 10);
// console.log(result3);
// console.log(arr);


// const result4 = arr.findLastIndex((item) => item > 10);
// console.log(result4);

// console.log(arr.includes(undefined));


//filter
// const result = arr.filter((item) => item % 2 === 0);
// console.log(result);

// const result2 = arr.filter((item) => item > 100);
// console.log(result2);

const saleProducts = [];
const products = [
    { id: 1, title: "san pham A", price: 200, quantity: 2, discount: 0.1 },
    { id: 2, title: "san pham B", price: 200, quantity: 2, discount: 0.2 },
    { id: 3, title: "san pham C", price: 300, quantity: 2, discount: 0.3 },
    { id: 4, title: "san pham D", price: 400, quantity: 2, discount: 0.05 },
]

// const saleProduct = products.filter((item) => item.discount >= 0.2);
// console.log(saleProduct);

//forEach
// let total = 0;
// products.forEach((item) => {
//     total += item.price * item.quantity * (1 - item.discount)
// });
// console.log(total);

// const newProduct = products.map((item) => {
//     return item.title;
// })
// console.log(newProduct);

// const addAmountProduct = products.map((item) => {
//     item.amount = item.price * item.quantity * (1 - item.discount);
//     return item;
// })
// console.log(addAmountProduct);

const newProducts = products.map((item) => {
    const newItem = { ...item, amount: item.price * item.quantity * (1 - item.discount) };
    return newItem;
})

console.log(newProducts);
console.log(products);






