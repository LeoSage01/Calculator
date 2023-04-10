let buttons = document.querySelectorAll(".button");
let screen = document.querySelector(".calc-typed");

buttons.forEach(button =>{
    //Adding click event
    button.onclick = () => {
    if(/\d|[+-/*%]/.test(button.innerHTML)){
        // Outputing to screen
      screen.innerHTML += button.innerHTML;
    } else{
        // Clearing calculator screen
        if(button.innerHTML == "C"){
            screen.innerHTML = "";
        } else if(button.innerHTML == "del") {
            // Removing each character from the string
            let arr = screen.innerHTML.split("");
            arr.pop();
            screen.innerHTML = arr.join('');
        } else if(button.innerHTML == "="){
            // calculating %
            if(screen.innerHTML.includes("%")){
                screen.innerHTML = eval(screen.innerHTML.replace("%","/100"))
            } else{
                // Calculating stuff in the screen
                screen.innerHTML = eval(screen.innerHTML);
            }
        }
    }

    }
});


















