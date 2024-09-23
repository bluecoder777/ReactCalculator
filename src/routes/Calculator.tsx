import { useState } from "react";
import CalculatorButton from "../conmponents/CalculatorButton";
import { Input } from "antd";

function Calculator() {
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);

  function handleButtonPress(num: number) {
    if (operator) {
      setOperand2(operand2 * 10 + num);
      setResult(operand2);
    } else {
      setOperand1(operand1 * 10 + num);
      setResult(operand1);
    }
  }

  return (
    <>
      <div>
        <Input size="large" value={result} type="number" />
      </div>
      <div className="calculatorRow">
        <CalculatorButton item="1" onClick={handleButtonPress} />
        <CalculatorButton item="2" onClick={handleButtonPress} />
        <CalculatorButton item="3" onClick={handleButtonPress} />
        <CalculatorButton item="/" onClick={handleButtonPress} />
      </div>
      <div className="calculatorRow">
        <CalculatorButton item="4" onClick={handleButtonPress} />
        <CalculatorButton item="5" onClick={handleButtonPress} />
        <CalculatorButton item="6" onClick={handleButtonPress} />
        <CalculatorButton item="*" onClick={handleButtonPress} />
      </div>
      <div className="calculatorRow">
        <CalculatorButton item="7" onClick={handleButtonPress} />
        <CalculatorButton item="8" onClick={handleButtonPress} />
        <CalculatorButton item="9" onClick={handleButtonPress} />
        <CalculatorButton item="-" onClick={handleButtonPress} />
      </div>
      <div className="calculatorRow">
        <CalculatorButton item="." onClick={handleButtonPress} />
        <CalculatorButton item="0" onClick={handleButtonPress} />
        <CalculatorButton item="=" onClick={handleButtonPress} />
        <CalculatorButton item="+" onClick={handleButtonPress} />
      </div>
      <div className="calculatorRow">
        <CalculatorButton item="CE" onClick={handleButtonPress} />
      </div>
    </>
  );
}

export default Calculator;
