let display = document.getElementById('inputBox'); 
let buttons = document.querySelectorAll('button');
let screen = " ";
for(item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if(buttonText == 'M+') {
            screen = eval(screen);
            display.value = screen;
        }
        else if(buttonText == 'x^2') {
            screen = screen**2;
            display.value = screen;
        }
        else if(buttonText == 'x^-1') {
            screen = 1/screen;
            display.value = screen;
        }
        else if(buttonText == 'x^x') {
            screen += '^';
            display.value = screen;
        }
        // else if(buttonText == 'Ans') {
        //     screen = '';
        //     display.value = 'Ans'+screen;
        // }
        else if(buttonText == '*' ) {
            screen += buttonText;
            display.value = screen;
        }
        else if(buttonText == 'AC') {
            screen = "";
            display.value = screen;
        }
        else if(buttonText == 'DEL') {
            screen = screen.substring(0, screen.length-1);
            display.value = screen;
        }
        else if(buttonText == '=') {
            screen = screen.replace('(', '*(');
            screen = screen.replace('x', '*');
            screen = screen.replace('^', '**');
            screen= eval(screen);
            display.value = screen;
            // Ans = screen;
            screen = '';
        }
        else{
            screen += e.target.innerText;
            display.value = screen;
        }      
    })
}