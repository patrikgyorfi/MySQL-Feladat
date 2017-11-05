document.querySelector("#login-btn").addEventListener("click", function () {
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    if (username === "sqlprojekt" && password === "asd123") {
        window.location.href = "http://localhost/adatbazis/MySQL-Feladat/index.html";
    } else {
        window.alert("Rossz felhasználónév vagy jelszó!")
    }
})