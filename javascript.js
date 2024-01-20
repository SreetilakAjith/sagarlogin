let loginButton = document.getElementById("loginButton");
let username = document.getElementById("usernameInput");
let password = document.getElementById("passwordInput");
let login = false;

window.SuccessfulUsername = "";


//Data
let Usernames = ["a2FzaQ==", "a2FybmFu", "c2hlZWJh", "YWRtaW4="];
let Passwords = ["a2FzaUA=", "a2FybmFuQA==", "c2hlZWJhQA==", "cGFzc3dvcmQ="];


function GetDetails(){
    login = false;

    for(let i = 0; i < Usernames.length; i++){
        if(username.value == atob(Usernames[i]) && password.value == atob(Passwords[i])){

            username.value = "Successful !";
            SuccessfulUsername = atob(Usernames[i]);
            login = true;
            username.style.borderColor = "greenyellow";
            password.style.borderColor = "greenyellow";

            window.location.href = "Dashboard.html?Username=" + SuccessfulUsername;

            console.log("Login Successful !");
            console.log("Username : " + SuccessfulUsername);

            break;
        }
    }

    if(login == false){
        username.value = "Username / Password Incorrect !";
        alert("Inavlid Username / Password");
        username.style.borderColor = "red";
        password.style.borderColor = "red";
        console.log("Login Failed !");
    }


}

loginButton.addEventListener("click", GetDetails);