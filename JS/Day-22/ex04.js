// const title = "Ao khoac nam";
// const price = 200;
// const decscription = "Mo ta chi tiet ao";
// const size = "XL";

// // const size = "XL";

// // product.size = size;
// const product = { title, price, decscription, size };

// console.log(product);
function findMostFrequentNumber(arr) {
    let frequency = {};
    let maxCount = 0;
    let mostFrequent = arr[0];
    for (const number of arr) {
        if (frequency[number]) {
            frequency[number]++;
        } else {
            frequency[number] = 1;
        }

        if (frequency[number] > maxCount) {
            maxCount = frequency[number];
            mostFrequent = number;
        }
    }
    console.log(frequency);
    console.log(`Số lần lặp lại nhiều nhất: ${maxCount}}`);
    console.log(`Số được lặp lại nhiều nhất ${mostFrequent} `);
}

// Sample usage
console.log(findMostFrequentNumber([1, 2, 3, 4, 2, 2, 3, 2, 5])); // 2
console.log(findMostFrequentNumber([1, 2, 3, 4, 2, 2, 3, 3, 3, 2])); // 3

