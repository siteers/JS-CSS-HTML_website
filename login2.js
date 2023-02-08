
let button = document.getElementById("button");
let login = document.getElementById("login");
let password = document.getElementById("password");


button.addEventListener("click", sprawdz);

function sprawdz() 
{
    if(login.value != "admin" || password.value != "1234")
    {
        alert("Incorrect login or paasword!");
        location.reload();
        
    }
    else if(login.value == "admin" && password.value == "1234")
    {
        button.remove();
    }
}

