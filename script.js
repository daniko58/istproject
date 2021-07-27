

function saveUsername(){
    // Store data
    if(localStorage.getItem("username") == null){
        var username = document.getElementById("username").value;
        localStorage.setItem("username", username);
        document.getElementById("usernamedisplay").innerHTML = "Hello, " + localStorage.getItem("username");
        document.getElementById("form").style.display = "none";
    }
}

function saveUsername() {
  document.getElementById("demo").innerHTML = "Username saved.";
} 


if(localStorage.getItem("username") != null){
    // Retrieve data
    document.getElementById("usernamedisplay").innerHTML = "Welcome back, " + localStorage.getItem("username");
    document.getElementById("form").style.display = "none";
} 

function myFunction1() {
    document.getElementById("demo").innerHTML = "Paragraph 1 changed.";
  }

    function myFunction2() {
    document.getElementById("demo").innerHTML = "Paragraph 2 changed.";
    }

    function myFunction3() {
    document.getElementById("demo").innerHTML = "Paragraph 3 changed.";
    }

    function myFunction4() {
    document.getElementById("demo").innerHTML = "Paragraph 4 changed.";
    }

    