const btn = document.querySelector("#btn-01");
btn.onclick = function () {
    console.log("xin chao");
};

btn.addEventListener("click", function () {
    setTimeout(() => {
        console.log("bongjuar");
    }, 1000);
});

btn.addEventListener("click", function () {
    console.log("tam biet");
});
