import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage {
  displayValue = '0';  
  firstOperand: number | null = null;  
  operator: string | null = null;  
  waitingForSecondOperand = false; 

  
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;

    if (!isNaN(Number(key))) {
      this.inputDigit(key);  
    } else if (key === '.') {
      this.inputDecimal();  
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      this.inputOperator(key);  
    } else if (key === 'Enter' || key === '=') {
      this.calculate();  
      event.preventDefault();
    } else if (key === 'Escape' || key === 'C' || key === 'c') {
      this.clear(); 
    } else if (key === '%') {
      this.percent();  
    } else if (key === 'Backspace') {
      this.backspace(); 
    }
  }


  clear() {
    this.displayValue = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
  }

  
  inputDigit(digit: string) {
    if (this.waitingForSecondOperand) {
      this.displayValue = digit;  
      this.waitingForSecondOperand = false;
    } else {
      this.displayValue =
        this.displayValue === '0' ? digit : this.displayValue + digit;  
    }
  }

  
  inputDecimal() {
    if (!this.displayValue.includes('.')) {
      this.displayValue += '.'; 
    }
  }

  
  inputOperator(operator: string) {
    if (this.firstOperand === null) {
      this.firstOperand = parseFloat(this.displayValue);  
    } else if (this.operator) {
      const result = this.calculateResult(
        this.firstOperand,
        parseFloat(this.displayValue),
        this.operator
      );
      this.displayValue = `${parseFloat(result.toFixed(7))}`; 
      this.firstOperand = result;  
    }

    this.operator = operator;  
    this.waitingForSecondOperand = true;  
  }

  
  calculate() {
    if (this.firstOperand !== null && this.operator !== null) {
      const result = this.calculateResult(
        this.firstOperand,
        parseFloat(this.displayValue),
        this.operator
      );
      this.displayValue = `${parseFloat(result.toFixed(7))}`;  
      this.firstOperand = result;  
      this.operator = null;  
      this.waitingForSecondOperand = false;  
    }
  }

 
  calculateResult(firstOperand: number, secondOperand: number, operator: string) {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return secondOperand !== 0 ? firstOperand / secondOperand : 0;  
      default:
        return secondOperand;  
    }
  }


  toggleSign() {
    this.displayValue = (parseFloat(this.displayValue) * -1).toString();
  }

  percentage() {
    this.displayValue = (parseFloat(this.displayValue) / 100).toString();
  }
  

  percent() {
    this.displayValue = (parseFloat(this.displayValue) / 100).toString();
  }


  backspace() {
    this.displayValue = this.displayValue.slice(0, -1) || '0';  
  }
}
