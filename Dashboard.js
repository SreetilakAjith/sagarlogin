let text = document.getElementById("user");
let loButton = document.getElementById("LogOutButton");
let dateText = document.getElementById("date");
let table = document.getElementById("tableInfo");
let toggle = document.getElementById("Mode");
let body = document.getElementById("body");
let toggleText = document.getElementById("toggleText");

// Get Date
let date = new Date();
let year = date.getFullYear();
let day = date.getDate();
let month = date.getMonth() + 1;

// Username Search System
let QuerySearch = window.location.search;
let urlParams = new URLSearchParams(QuerySearch);  // Create a URLSearchParams object
let username = urlParams.get("Username");  // Get the value of the "username" parameter
const key = "6544dsf4sdf4sd4fwe4rg6tg4w5fv4t8gw48g4r";

text.textContent = "Welcome " + CryptoJS.AES.decrypt(username, key).toString(CryptoJS.enc.Utf8);
console.log(CryptoJS.AES.decrypt(username, key).toString(CryptoJS.enc.Utf8));

dateText.textContent = `${day}/${month}/${year}`;

if(username == "admin"){
    table.style.display = "flex";
} else {
    table.style.display = "none";
}

// Log Out Function 

function LogOut(){
    window.location.href = "index.html";
}

loButton.addEventListener("click", LogOut);

function ToggleCheck(){
    if(toggle.checked){
        document.body.style.backgroundColor = "black";
        dateText.style.color = "white";
        text.style.color = "white";
        table.style.color = 'white';
        table.style.borderColor = "white";
    } else {
        document.body.style.backgroundColor = "white";
        dateText.style.color = "black";
        table.style.color = 'black';
        table.style.borderColor = "black";
        text.style.color = "black";
        toggleText.style.color = "black";
    }
}

let interval = setInterval(ToggleCheck, 100);

