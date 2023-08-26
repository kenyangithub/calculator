import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumberClick = (number) => {
    if (display === '0' || currentValue === '0') {
      setDisplay(String(number));
      setCurrentValue(String(number));
    } else {
      setDisplay(display + number);
      setCurrentValue(currentValue + number);
    }
  };

  const handleOperatorClick = (op) => {
    if (currentValue !== '') {
      setOperator(op);
      setCurrentValue('');
      setDisplay(display + ' ' + op + ' ');
    }
  };

  const handleEqualClick = () => {
    if (operator !== '' && currentValue !== '') {
      const value1 = parseFloat(display);
      const value2 = parseFloat(currentValue);
      let result;

      switch (operator) {
        case '+':
          result = value1 + value2;
          break;
        case '-':
          result = value1 - value2;
          break;
        case '*':
          result = value1 * value2;
          break;
        case '/':
          result = value1 / value2;
          break;
        default:
          return;
      }

      setDisplay(String(result));
      setCurrentValue(String(result));
      setOperator('');
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setCurrentValue('');
    setOperator('');
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={handleNumberClick.bind(null, 7)}>7</button>
        <button onClick={handleNumberClick.bind(null, 8)}>8</button>
        <button onClick={handleNumberClick.bind(null, 9)}>9</button>
        <button onClick={handleOperatorClick.bind(null, '+')}>+</button>
        <button onClick={handleNumberClick.bind(null, 4)}>4</button>
        <button onClick={handleNumberClick.bind(null, 5)}>5</button>
        <button onClick={handleNumberClick.bind(null, 6)}>6</button>
        <button onClick={handleOperatorClick.bind(null, '-')}>-</button>
        <button onClick={handleNumberClick.bind(null, 1)}>1</button>
        <button onClick={handleNumberClick.bind(null, 2)}>2</button>
        <button onClick={handleNumberClick.bind(null, 3)}>3</button>
        <button onClick={handleOperatorClick.bind(null, '*')}>*</button>
        <button onClick={handleNumberClick.bind(null, 0)}>0</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={handleOperatorClick.bind(null, '/')}>/</button>
        <button onClick={handleClearClick}>C</button>
      </div>
    </div>
  );
}

export default App;
