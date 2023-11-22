function validateForm() {

    // kiểm tra Password và RePassword
    var password = document.getElementById("password").value;
    var rePassword = document.getElementById("rePassword").value;
    if (password !== rePassword) {
        document.getElementById("rePasswordError").innerHTML = "Password không khớp.";
        return false;
    } else {
        document.getElementById("rePasswordError").innerHTML = "";
    }

   

    return true;
}