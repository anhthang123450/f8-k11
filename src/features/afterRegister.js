function afterRegister() {
    const registerForm = document.querySelector("#formRegister");
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(registerForm);
        const userInfor = Object.fromEntries(formData);

        fetch("http://localhost:3000/register", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(userInfor),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    });
}

export default afterRegister;
