// console.log({ document });

// const myDocument = {
//     html: {
//         head: {
//             title: {
//                 textNode: "Title trang web",
//             },
//         },
//         body: {
//             h1: {
//                 textNode: "DOM",
//             },
//         },
//     },
// };

// // console.log(myDocument);
// const h1ElementC1 = document.getElementsByTagName("h1")[0];
// const h1ElementC2 = document.getElementById("title-page");
// const h1ElementC3 = document.getElementsByClassName("title")[0];
// const h1ElementC4 = document.querySelector("h1#title-page.title");
// const h1ElementC5 = document.querySelectorAll("h1#title-page.title");

// console.log({ h1ElementC1 });
// console.log(h1ElementC2);
// console.log(h1ElementC3);
// console.log(h1ElementC4);
// console.log(h1ElementC5);

// const olElement = document.getElementsByTagName("ol")[0];

// console.log({ olElement });

// console.log(olElement.childNodes);
// console.log(olElement.children);

// const liElementList = olElement.children;

// for (let i = 0; i < liElementList.length; i++) {
//     console.log(liElementList[i]);
// }

// for (const value of liElementList) {
//     console.log(value);
// }

// const liElementListC2 = document.getElementsByTagName("li");

// // liElementListC2.forEach((item) => console.log(item));

// const liElementListC3 = document.querySelectorAll("li");
// console.log(liElementListC3);

// for (let i = 0; i < liElementListC3.length; i++) {
//     console.log(liElementListC3[i]);
// }

// for (const value of liElementListC3) {
//     console.log(value);
// }

// liElementListC3.forEach((item) => console.log(item));

// const liElementCustom = document.createElement("li");
// liElementCustom.innerText = "Noi dung the li custom";

// olElement.appendChild(liElementCustom);
// // olElement.removeChild(liElementCustom);
// olElement.replaceChild(liElementCustom, liElementList[1]);

const arr1 = [
    { id: 1, name: "Hoang" },
    { id: 3, name: "Dung" },
    { id: 2, name: "Hien" },
];

arr1.sort((a, b) => a.id - b.id);

const olElement = document.createElement("ol");
console.log(olElement);

for (let i = 0; i < arr1.length; i++) {
    const liElement = document.createElement("li");
    liElement.innerText = arr1[i].name;
    olElement.appendChild(liElement);
}

document.body.appendChild(olElement);
