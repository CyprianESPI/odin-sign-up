const params = new URLSearchParams(document.location.search);
const first_name = params.get("first_name");
const last_name = params.get("last_name");

if (first_name === null || last_name === null) {
    document.getElementById("username").innerText = "Log in failed..."
}
else {
    document.getElementById("username").innerText = first_name + " " + last_name;
}
