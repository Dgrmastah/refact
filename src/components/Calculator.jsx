import React, { useState } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState(''); 
    const [num2, setNum2] = useState(''); 
    const [result, setResult] = useState(null); 

    
    const handleNum1Change = (e) => setNum1(e.target.value);
    const handleNum2Change = (e) => setNum2(e.target.value);

    const handleSum = () => setResult(Number(num1) + Number(num2));
    const handleSubtract = () => setResult(Number(num1) - Number(num2));
    const handleMultiply = () => setResult(Number(num1) * Number(num2));
    const handleDivide = () => {
        if (num2 === '0') {
            setResult('No se puede dividir por cero');
        } else {
            setResult(Number(num1) / Number(num2));
        }
    };

    return (
        <div className="calculator">
            <input
                type="number"
                value={num1}
                onChange={handleNum1Change}
                placeholder="Número 1"
            />
            <input
                type="number"
                value={num2}
                onChange={handleNum2Change}
                placeholder="Número 2"
            />
            <div>
                <button onClick={handleSum}>Sumar</button>
                <button onClick={handleSubtract}>Restar</button>
                <button onClick={handleMultiply}>Multiplicar</button>
                <button onClick={handleDivide}>Dividir</button>
            </div>
            <div>
                {result !== null && <h3>Resultado: {result}</h3>}
            </div>
        </div>
    );
};

export default Calculator;



