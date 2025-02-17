// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

let i = 0;
while (i <= 10) {
    i++
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}