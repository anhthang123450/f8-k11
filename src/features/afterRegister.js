function afterRegister() {
    const registerForm = document.querySelector("#formRegister");
    registerForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        const formData = new FormData(registerForm);
        const userInfor = Object.fromEntries(formData);

        try {
            const res = await fetch("http://localhost:3000/register", {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(userInfor),
            });
            if (res.status === 400) {
                alert("Tài khoản đã được đăng ký");
            }
            const data = await res.json();
        } catch (error) {
            console.log(error);
        }
    });
}

export default afterRegister;
