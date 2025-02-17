function afterLogin() {
    const registerForm = document.querySelector("#formLogin");
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(registerForm);
        const userInfor = Object.fromEntries(formData);

        fetch("http://localhost:3000/login", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(userInfor),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.user) {
                    console.log("Đăng nhập thành công");
                    localStorage.setItem("data", JSON.stringify(data));
                } else {
                    console.log("Đăng nhập thất bại");
                }
            })
            .catch((error) => console.log(error));
    });
}

export default afterLogin;
