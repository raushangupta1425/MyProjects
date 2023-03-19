let input = document.querySelector('.input');
let buttons = document.querySelectorAll('button');
buttons.forEach((item) => {
    item.onclick = () => { 
        if(item.id == 'clear') {
            input.innerHTML = ' ';
        }
        else if(item.id == 'backspace') {
            let string = input.innerHTML.toString();
            input.innerHTML = string.substr(0, string.length - 1);
        }
        else if(input.innerHTML != ' ' && item.id == 'equal'){
            input.innerHTML = eval(input.innerHTML);
        }
        else if(input.innerHTML != ' ' && item.id == 'equal'){
            input.innerHTML = 'Empty!';
            setTimeout(() => (input.innerHTML = ' '), 2000);
        }
        else{
            input.innerHTML += item.id;
        }      
    }
})
