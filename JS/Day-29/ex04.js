// setTimeout(() => {
//     console.log("delay 1");
// }, 1000);

// setTimeout(() => {
//     console.log("delay 2");
// }, 0);

// console.log("show data");

const arr1 = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr1.length; i++) {
//     setTimeout(() => {
//         console.log(arr1[i]);
//     }, 1000 * arr1[i]);
// }

// const showItem = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         setTimeout(() => {
//             console.log(arr[i]);
//         }, 1000 * arr[i - 1]);
//     }
// };

// showItem(arr1);

setInterval(function () {
    const curTime = new Date();
    let year = curTime.getFullYear();
    let date = curTime.getDate();
    let month = curTime.getMonth();
    let hour = curTime.getHours();
    // console.log(hour);
    let minutes = curTime.getMinutes();
    let second = curTime.getSeconds();
    let content = `${hour}:${minutes}:${second}`;
    document.write(content);
    console.log(content);
    document.close();
    // console.log(second);
    // document.write(second);
    // console.log(second);
    // document.close();
}, 1000);
