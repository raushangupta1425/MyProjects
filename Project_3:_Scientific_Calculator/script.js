
let display = document.getElementById('inputBox'); 
let buttons = document.querySelectorAll('button');
let screen = " ";
for(item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText == 'ON') {
            screen = "0";
            display.value = screen;
        }
        else if(buttonText == '*' ) {
            screen += buttonText;
            display.value = screen;
        }
        else if(buttonText == 'AC') {
            screen = "0";
            display.value = screen;
        }
        else if(buttonText == 'DEL') {
            screen = screen.substring(0, screen.length-1);
            display.value = screen;
        }
        else if(buttonText == '=') {
            screen = eval(screen);
            display.value = screen;
        }
        else{
            screen += e.target.innerText;
            display.value = screen;
        }      
    })
}