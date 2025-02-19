function taskA(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task A doing");
            resolve("Task A Done");
        }, 3000);
    });
}

function taskB(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task B doing");
            resolve("Task B Done");
        }, 2000);
    });
}

function taskC(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task C doing");
            resolve("Task C Done");
        }, 1000);
    });
}

taskA()
    .then((result) => {
        console.log(result);
        return taskB();
    })
    .then((result) => {
        console.log(result);
        return taskC();
    })
    .then((result) => {
        console.log(result);
    })
    .catch()

    .finally(() => {
        console.log("Done All Tasks");
    });
