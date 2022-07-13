function pop(){
    let userName = document.getElementById("name").value;
    let password = document.getElementById("pswd").value;
    alert(`
    User name: ${userName}
    Password: ${password}
    `);
}
//password validation
var pswd = document.getElementById("pswd");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
pswd.onfocus = function(){
    document.getElementById("msg").style.display = "block";
}
pswd.onblur = function(){
    document.getElementById("msg").style.display = "none";
}
pswd.onkeyup = function(){
    var lower = /[a-z]/g;
    if(pswd.value.match(lower)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }
    else{
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
    //for upper case
    var upper = /[A-Z]/g;
    if(pswd.value.match(upper)){
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }
    else{
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }
    //for number
    var numb = /[0-9]/g;
    if(pswd.value.match(numb)){
        number.classList.remove("invalid");
        number.classList.add("valid");
    }
    else{
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
    //for length
    if(pswd.value.length >=8){
        length.classList.remove("invalid");
        length.classList.add("valid");
    }
    else{
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}
//password show and hide
function check(){
    if(pswd.type === "password"){
        pswd.type="text";
    }
    else{
        pswd.type= "password";
    }
}
