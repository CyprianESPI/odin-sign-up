check_pwd();

function check_pwd() {
    const pwd = document.getElementById("password").value;
    const confirm_pwd = document.getElementById("confirm_password").value;

    if (pwd === "" || confirm_pwd === "" || pwd !== confirm_pwd) {
        document.getElementById("pwd_error_msg").innerText = "* Passwords do not match";
        document.getElementById("password").style.border = "2px solid red";
        document.getElementById("confirm_password").style.border = "2px solid red";
    }
    else {
        document.getElementById("pwd_error_msg").innerText = "";
        document.getElementById("password").style.border = "";
        document.getElementById("confirm_password").style.border = "";
    }
}