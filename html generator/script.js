console.log("gkgkjgkj");
var tekstEl = document.getElementById("myTextarea");
var knappEl = document.getElementById("myButton");

var radiobuttonred=document.getElementById("Minknapp1")
var radiobuttonblue=document.getElementById("Minknapp2")

function handleClick() {

    var farge = tekstEl.value;
    
    document.body.style.backgroundColor = farge;
}

knappEl.addEventListener('click', handleClick)
function check() {
    document.getElementById("h1").checked = true;
    
  }