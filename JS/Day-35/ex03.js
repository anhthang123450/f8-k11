const promiseA = new Promise((resolve, reject) => {
    console.log("Task A doing");
    setTimeout(() => {
        resolve("Task A Done");
    }, 3000);
});

const promiseB = new Promise((resolve, reject) => {
    console.log("Task B doing");
    setTimeout(() => {
        resolve("Task B Done");
    }, 2000);
});

const promiseC = new Promise((resolve, reject) => {
    console.log("Task C doing");
    setTimeout(() => {
        resolve("Task C done");
    }, 1000);
});

// Promise.all([promiseA, promiseB, promiseC])
//     .then((values) => {
//         console.log(values);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Finish");
//     });

Promise.race([promiseA, promiseB, promiseC])
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finish");
    });
