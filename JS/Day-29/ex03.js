// const time1 = new Date();

// console.log(time1);
// console.log(typeof time1);

// const now = Date.now();
// console.log(now);
// console.log(typeof now);

// console.log(Date.prototype);

// const time3 = new Date("2025-12-02");
// console.log(time3);
// console.log(new Date(1736564416450));

// console.log({ time3 });

// console.log(time3.getFullYear());
// console.log(time3.getTime());
// console.log(time3.getMonth());
// console.log(time3.getDay());
// console.log(time3.getYear());

// console.log(time3.getHours());
// console.log(time3.getMinutes());

// thpf

// const date = new Date("2003-08-09");
// const now = Date.now();
// const dateNow = new Date();
// console.log(dateNow);
// console.log(dateNow.getDay());
// console.log(now);

// const totalMs = now - date;
// console.log(Math.floor(totalMs / 86400000));
// console.log(Math.floor(totalMs / (1000 * 60 * 60 * 24)));

function hoursFromMonday() {
    const now = new Date(); // Lấy ra thời gian hiện tại
    const dayOfWeek = now.getDay(); // Lấy ra số ngày hiện tạiư
    const hoursNow = now.getHours();

    const daysFromMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

    const totalHours = daysFromMonday * 24 + hoursNow;
    return totalHours;
}

// Sử dụng
const result = hoursFromMonday();
console.log(`Số ngày từ Thứ Hai đến hiện tại là: ${result}h`);
