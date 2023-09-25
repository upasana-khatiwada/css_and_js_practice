function validate(){
    var name = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if(name.length <6){
        alert("Enter Full Name");
        return false
    }
    else if(password.length<6){
        alert("password is short");
        document.getElementById("password").value="";
        document.getElementById("password").style.border="solid 2px Red";
    }
}