// const students = ["Viet Anh", "Minh", "Trung", "Thang"];
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// for (item of students) {
//     console.log(item);
// }

const students = [
    { fullName: "Nguyen Viet Anh", age: 22, pay: 2000 },
    { fullName: "Nguyen Manh Huy", age: 17, pay: 5000 },
    { fullName: "Dang Nhat Minh", age: 22, pay: 10000 },
    { fullName: "Nguyen Thanh Trung", age: 18, pay: 3000 },
];

for (let i = 0; i < students.length; i++) {
    if (students[i].age < 20) {
        console.log("Người dưới 20 tuổi\n", students[i]);
    }
}

let total = 0;

for (let i = 0; i < students.length; i++) {
    console.log(students[i].pay);
    total += students[i].pay;
}

console.log("Tổng số tiền là:", total);

const paragraph = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim impedit sed, non obcaecati nulla esse provident! Inciduntshic harum, quis repellat cupiditate vel quas optio neque fugit et, laborum explicabo";
function countWords(p) {
    let count = 1;

}
