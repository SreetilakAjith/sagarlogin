let text = document.getElementById("user");
let loButton = document.getElementById("LogOutButton");
let dateText = document.getElementById("date");

// Get Date
let date = new Date();
let year = date.getFullYear();
let day = date.getDate();
let month = date.getMonth() + 1;

// Username Search System
let QuerySearch = window.location.search;
let urlParams = new URLSearchParams(QuerySearch);  // Create a URLSearchParams object
let username = urlParams.get("Username");  // Get the value of the "username" parameter

text.textContent = "Welcome " + username;

dateText.textContent = `${day}/${month}/${year}`;

function LogOut(){
    window.location.href = "index.html";
}

loButton.addEventListener("click", LogOut);

