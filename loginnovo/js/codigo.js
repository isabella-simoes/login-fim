
function login(){
    var user = document.getElementById("user").value
    var senha = document.getElementById("senha").value

    if(user == "eduardo@gmail.com" && senha == "1234"){
        location.href = "paginainicial.html"
    }
    else{
        alert("usuario e senha incorretos")
    }
}