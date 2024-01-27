
let loginButton = document.getElementById("loginButton");
let username = document.getElementById("usernameInput");
let password = document.getElementById("passwordInput");
let login = false;
let userTry = 0;
let maxTry = 3;

window.SuccessfulUsername = "";

const Cypher = "6544dsf4sdf4sd4fwe4rg6tg4w5fv4t8gw48g4r";

//Data
let Usernames = ["U2FsdGVkX1/A/NwgPfsDnY2APImSA6PtUd/xKWlz87I=", "U2FsdGVkX1/H15aR6MFaSureVerbaFrnHbCZsdBpZW8=", "U2FsdGVkX1+eUIUI7R1xim/vNto2vBA7fwKuxL/E/Ac="];
let Passwords = ["U2FsdGVkX199Ni8rdErVPEXeCtwDQL4G+r5uGYU3RZA=", "U2FsdGVkX1+VC6gyBwN//GWPw+YNaGxfpessXC9J6jo=", "U2FsdGVkX18Lt0qyaDCg10w/s5iszYoe1LyYN1lN9ak="];


function GetDetails(){
    login = false;

    // Identification with Details

    for(let i = 0; i < Usernames.length; i++){
        if(username.value == CryptoJS.AES.decrypt(Usernames[i], Cypher).toString(CryptoJS.enc.Utf8) && password.value == CryptoJS.AES.decrypt(Passwords[i], Cypher).toString(CryptoJS.enc.Utf8)){

            username.value = "Successful !";
            SuccessfulUsername = Usernames[i];
            login = true;
            username.style.borderColor = "greenyellow";
            password.style.borderColor = "greenyellow";

            window.location.href = "Dashboard.html?Username=" + SuccessfulUsername;

            console.log("Login Successful !");
            console.log("Username : " + SuccessfulUsername);

            break;
        }
    }

    // Check Login Status

    if(login == false){
        username.value = "Username / Password Incorrect !";
        alert("Inavlid Username / Password");
        username.style.borderColor = "red";
        password.style.borderColor = "red";
        console.log("Login Failed !");
        userTry+=1;
        console.log("Try: " + userTry);
    }

    // Check Attemtps

    if(userTry >= maxTry){
        username.value = "Forgot Password / Username?";
        alert("Contact - 123*9*9*9*");
        loginButton.disabled = true;
        loginButton.textContent = "Disabled";
    }


}

loginButton.addEventListener("click", GetDetails);
