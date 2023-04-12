class Calculator {
    constructor(previousButton, currentButton){
        this.previousButton = previousButton;
        this.currentButton = currentButton;
        this.clear();
    }

    clear() {
        this.currentOperand = ' ';
        this.previousOperand = ' ';
        this.operation = undefined;
    }
    delet() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    chooseOperation(operation) {
        this.currentOperand = this.currentOperand.toString() + operation.toString();
        // if(this.currentOperand === ' ') return;
        this.operation = operation;
        this.previousOperand = this.currentOperand;
    }
    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current= parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current)) return;
        switch(this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = ' ';
    }
    updateDisplay() {
        this.currentButton.innerText = this.currentOperand;
        this.previousButton.innerText = ' ';
    }
}
let numberButtons = document.querySelectorAll('[number]');
let operationButtons = document.querySelectorAll('[oper]');
let equalsButton = document.querySelector('[equl]');
let clearButton = document.querySelector('[clear]');
let deletButton = document.querySelector('[delet]');
let previousButton = document.querySelector('[previous]');
let currentButton = document.querySelector('[current]');

let calculator = new Calculator(previousButton, currentButton);

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{ 
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () =>{ 
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})
equalsButton.addEventListener('click', button =>{ 
        calculator.compute();
        calculator.updateDisplay();
})
clearButton.addEventListener('click', button =>{ 
        calculator.clear();
        calculator.updateDisplay();
})
deletButton.addEventListener('click', button =>{ 
        calculator.delet();
        calculator.updateDisplay();
})