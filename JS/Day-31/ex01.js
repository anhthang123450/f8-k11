let h2Element = document.createElement("h2");
// h2Element.innerText = "Noi dung";
// document.body.appendChild(h2Element);

// // document.body.innerHTML = `
// //     <div>
// //         <p>Noi dung</p>
// //     </div>
// // `;

let boxClassElement = document.querySelector(".box");

console.log(boxClassElement); // getter

// boxClassElement.innerHTML = `<p> Nội dung mới của box</p>`; //setter

// boxClassElement.outerHTML = `<p> Nội dung mới của box</p>`;

console.log(boxClassElement.textContent);

console.log(boxClassElement.innerText);
