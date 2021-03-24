const btns = document.querySelector('#btns');
const btnrow1 = btns.querySelector('.btnrow1');
const btnrow2 = btns.querySelector('.btnrow2');
const btnrow3 = btns.querySelector('.btnrow3');
const btnrow4 = btns.querySelector('.btnrow4');
const display = document.querySelector('#display');
const displayPara = display.firstElementChild;

const btn7 = btnrow1.children[0];
const btn8 = btnrow1.children[1];
const btn9 = btnrow1.children[2];
const delBtn = btnrow1.children[3];
const clearBtn = btnrow1.children[4];
const btn4 = btnrow2.children[0];
const btn5 = btnrow2.children[1];
const btn6 = btnrow2.children[2];
const mulbtn = btnrow2.children[3];
const divbtn = btnrow2.children[4];
const btn1 = btnrow3.children[0];
const btn2 = btnrow3.children[1];
const btn3 = btnrow3.children[2];
const addBtn = btnrow3.children[3];
const subBtn = btnrow3.children[4];
const btn0 = btnrow4.firstElementChild;
const opBtn = btnrow4.children[1];

let displayValue = '';
let num1 = 0;
let operate = '';
let opValue = 0;

// input functions which affect the display

const input7 = () => {
  return (displayPara.textContent = displayValue += '7');
};

const input8 = () => {
  return (displayPara.textContent = displayValue += '8');
};

const input9 = () => {
  return (displayPara.textContent = displayValue += '9');
};

const delInput = () => {
  displayValue = displayValue.slice(0, -1);
  return (displayPara.textContent = displayValue);
};

const inputClear = () => {
  displayValue = '';
  opValue = 0;
  num1 = 0;
  return (displayPara.textContent = 0);
};

const input4 = () => {
  return (displayPara.textContent = displayValue += '4');
};

const input5 = () => {
  return (displayPara.textContent = displayValue += '5');
};

const input6 = () => {
  return (displayPara.textContent = displayValue += '6');
};

const input1 = () => {
  return (displayPara.textContent = displayValue += '1');
};

const input2 = () => {
  return (displayPara.textContent = displayValue += '2');
};

const input3 = () => {
  return (displayPara.textContent = displayValue += '3');
};

const input0 = () => {
  return (displayPara.textContent = displayValue += '0');
};

// Math operator functions
const add = () => {
  operate = '+';
  if (displayValue === '') {
    num1 = 0;
  } else {
    num1 = parseInt(displayValue);
    displayValue = '';
  }
};

const subtract = () => {
  operate = '-';
  num1 = parseInt(displayValue);
  displayValue = '';
};

const multiply = () => {
  operate = '*';
  num1 = parseInt(displayValue);
  displayValue = '';
};

const divide = () => {
  operate = '/';
  num1 = parseInt(displayValue);
  displayValue = '';
};

const operator = () => {
  if (operate === '+') {
    if (opValue === 0) {
      num2 = parseInt(displayValue);
      opValue = num1 + num2;
      operate = '';
      return (displayPara.textContent = opValue);
    } else {
      num2 = parseInt(displayValue);
      opValue += num2;
      operate = '';
      return (displayPara.textContent = opValue);
    }
  } else if (operate === '-') {
    if (opValue === 0) {
      num2 = parseInt(displayValue);
      opValue = num1 - num2;
      operate = '';
      return (displayPara.textContent = opValue);
    } else {
      num2 = parseInt(displayValue);
      opValue -= num2;
      operate = '';
      return (displayPara.textContent = opValue);
    }
  } else if (operate === '*') {
    if (opValue === 0) {
      num2 = parseInt(displayValue);
      opValue = num1 * num2;
      operate = '';
      return (displayPara.textContent = opValue);
    } else {
      num2 = parseInt(displayValue);
      opValue *= num2;
      operate = '';
      return (displayPara.textContent = opValue);
    }
  } else if (operate === '/') {
    if (opValue === 0) {
      num2 = parseInt(displayValue);
      if (num2 === 0) {
        inputClear();
        operate = '';
        return alert('You should not divide by 0');
      } else opValue = num1 / num2;
      operate = '';
      return (displayPara.textContent = opValue);
    } else {
      num2 = parseInt(displayValue);
      opValue /= num2;
      operate = '';
      if (num2 === 0) {
        inputClear();
        operate = '';
        return alert('You should not divide by 0');
      } else {
        operate = '';
        return (displayPara.textContent = opValue);
      }
    }
  } else {
    if (opValue === 0) {
      num1 = parseInt(displayValue);
      displayPara.textContent = num1;
    } else displayPara.textContent = opValue;
  }
};

// eventlistener functions

btn7.addEventListener('click', input7);
btn8.addEventListener('click', input8);
btn9.addEventListener('click', input9);
delBtn.addEventListener('click', delInput);
opBtn.addEventListener('click', operator);
clearBtn.addEventListener('click', inputClear);
btn4.addEventListener('click', input4);
btn5.addEventListener('click', input5);
btn6.addEventListener('click', input6);
btn1.addEventListener('click', input1);
btn2.addEventListener('click', input2);
btn3.addEventListener('click', input3);
btn0.addEventListener('click', input0);
addBtn.addEventListener('click', add);
subBtn.addEventListener('click', subtract);
mulbtn.addEventListener('click', multiply);
divbtn.addEventListener('click', divide);
