function check_pwd() {
    const pwd = document.getElementById("password").value;
    const confirm_pwd = document.getElementById("confirm_password").value;

    if (pwd === "" || confirm_pwd === "" || pwd !== confirm_pwd) {
        document.getElementById("pwd_error_msg").innerText = "* Passwords do not match";
    }
    else {
        document.getElementById("pwd_error_msg").innerText = "";
    }
}