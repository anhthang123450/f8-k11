function taskA(callback) {
    setTimeout(() => {
        console.log("Task A done");
        callback();
    }, 3000);
}

function taskB(callback) {
    setTimeout(() => {
        console.log("Task B done");
        callback();
    }, 2000);
}

function taskC(callback) {
    setTimeout(() => {
        console.log("Task C done");
        callback();
    }, 1000);
}

taskA(() => taskB(() => taskC(() => console.log("All tasks done"))));
