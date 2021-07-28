

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
  window.location.href = "https://daniko58.github.io/istproject/index2.html";
  }

    function myFunction2() {
      window.location.href = "https://daniko58.github.io/istproject/index3.html";
    }

    function myFunction3() {
      window.location.href = "https://daniko58.github.io/istproject/index4.html";
    }

    var images = document.querySelectorAll('#myGrid img');
images.forEach((image) => {
  image.addEventListener('mouseover', (event) => {
    var imgcoords = event.target.getBoundingClientRect();
    var tooltim = document.getElementById('imgtooltip');
    tooltim.style.left = imgcoords.left+window.pageXOffset+'px';
    tooltim.style.top = imgcoords.top+window.pageYOffset-1+'px';
    tooltim.style.width = imgcoords.width+'px';
    tooltim.style.height = imgcoords.height+'px';
    console.log(imgcoords);
    tooltim.querySelector('#locationText').innerText = event.target.dataset.location;
    
  });

});