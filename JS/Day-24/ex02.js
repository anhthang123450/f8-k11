const products = [
    { id: 2, title: "XXX", price: 200, quantity: 2, discount: 0.2 },
    { id: 4, title: "ZZZ", price: 400, quantity: 2, discount: 0.05 },
    { id: 1, title: "AAA", price: 500, quantity: 2, discount: 0.1 },
    { id: 3, title: "BBB", price: 300, quantity: 2, discount: 0.3 },
];

function sortProducts(data, valueSelect = 0) {
    switch (valueSelect) {
        case 0:
            data.sort((a, b) => {
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;
                return 0;
            });
            break;
        case 1:
            data.sort((a, b) => {
                if (b.title > a.title) {
                    return 1;
                } else {
                    return - 1;
                }
            });
            break;
        case 2:
            data.sort((a, b) => b.price - a.price)
            break;
        case 3:
            data.sort((a, b) => a.price - b.price);
            break;
        case 4:
            data.sort((a, b) => b.discount - a.discount);
            break;
        default:
            console.log("Check");
            break;
    }
}
sortProducts(products, 1);
console.table(products);




