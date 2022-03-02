function valueButton(e){
    calculatorform.screen.value += e.value;
}

function Clear(){
    calculatorform.screen.value = null;
}

function Calculate(){
    calculatorform.screen.value = eval( calculatorform.screen.value);
}

function changemode() {
    var body = document.body
    body.classList.toggle("darkmode")
    var button = document.getElementsByClassName("button")
    button.classList.toggle("darkbutton")
}

function changetext(){
    var x = document.getElementsByClassName("darkmode")
    if (x.innerHTML === "Dark Mode") {
        x.innerHTML = "Light Mode";
      } else {
        x.innerHTML = "Dark Mode";
      }
}


