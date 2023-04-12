let display = document.getElementById('inputBox'); 
let buttons = document.querySelectorAll('button');
// let oper = document.querySelectorAll('.operator');
let screen = " ";
let Ans = " ";
for(item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if(buttonText == 'M+') {
            screen = eval(screen);
            display.value = screen;
        }
        else if(buttonText == 'x 2') {
            screen = screen**2;
            display.value = screen;
        }
        else if(buttonText == '(-)') {
            screen += screen.includes('(') ? "-" : "(-";
            display.value = screen;
        }
        else if(buttonText == 'x -1') {
            screen = 1/screen;
            display.value = screen;
        }
        else if(buttonText == 'x x') {
            screen += '^';
            display.value = screen;
        }
        // else if(buttonText === '.' && screen.includes('.')) {
        //     if(screen.includes(oper)){
        //         screen += '.';
        //         display.value = screen;
        //     }
        //     else{
        //         return
        //     }
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
            if(screen == 'Ans'){
                screen = Ans+screen.slice(2,length)
                display.value = screen;
            }else{
            screen = screen.replace('(', '*(');
            screen = screen.replace('x', '*');
            screen = screen.replace('^', '**');
            screen= eval(screen);
            display.value = screen;
            Ans = screen;
            screen = '';
            }
        }
        else{
            screen += e.target.innerText;
            display.value = screen;
        }      
    })
}