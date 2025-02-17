const students = [
    { id: 1, fullName: "Nguyen Manh Huy", age: 10 },
    { id: 2, fullName: "Nguyen Minh Hoang", age: 10 },
    { id: 3, fullName: "Vu Huy Do", age: 22 },
    { id: 4, fullName: "Dang Nhat Minh", age: 22 },
    { id: 4, fullName: "Vu Huy Minh", age: 24 },
    { id: 4, fullName: "Tran Nguyen Ky Vu", age: 24 },
    { id: 4, fullName: "Nhung", age: 24 },
];

function sortStudents(data) {
    data.sort((a, b) => {
        const aFirstName = a.fullName.split(" ").slice(-1)[0];
        const bFirstName = b.fullName.split(" ").slice(-1)[0];
        if (aFirstName < bFirstName) {
            return -1;
        } else if (aFirstName > bFirstName) {
            return 1;
        } else {
            const aLastName = a.fullName.split(" ").slice(0, -1).join(" ");
            const bLastName = b.fullName.split(" ").slice(0, -1).join(" ");
            if (aLastName > bLastName) {
                return -1;
            } else {
                return 1;
            }
        }
    });
}

sortStudents(students);
console.table(students);