import router from "../main";

function afterLogin() {
    const registerForm = document.querySelector("#formLogin");
    registerForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        const formData = new FormData(registerForm);
        const userInfor = Object.fromEntries(formData);
        const emailInput = document.querySelector("[name = 'email']");
        const passwordInput = document.querySelector("[name = 'password']");

        const validateEmail = (email) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        };

        if (!validateEmail(userInfor.email)) {
            alert("Email không hợp lệ");
            emailInput.focus();
            return;
        }
        if (userInfor.password.length < 6) {
            alert("Mật khẩu có ít nhất 6 ký tự");
            passwordInput.focus();
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/login", {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(userInfor),
            });
            const data = await res.json();

            if (data.user) {
                console.log("Đăng nhập thành công");
                localStorage.setItem("user", JSON.stringify(data.user));
                router.navigate("/task");
            } else {
                alert("Sai tên tài khoản hoặc mật khẩu");
            }
        } catch (error) {
            console.log(error);
        }
    });
}

export default afterLogin;
