// fetch("https://dummyjson.com/products")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

async function fetchProducts() {
    try {
        const res = await fetch("https://dummyjson.com/products");
        console.log(res.status);
        if (res.status === 404) {
            throw new Error("Không tim thay san pham");
        }

        const data = await res.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchProducts();
