import "./Calculator.css";

const Calculator = () => {
  return (
    <div className="calculator-container">
      <h1>useState</h1>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="number1" className="form-label">
            Number 1
          </label>
          <input type="number" className="form-input" id="number2"></input>
        </div>
        <div className="form-group">
          <label htmlFor="number2" className="form-label">
            Number 2
          </label>
          <input type="number" className="form-input" id="number2"></input>
        </div>
        <button className="form-button">Add</button>
        <div className="form-group">
          <label htmlFor="result" className="form-label">
            Result
          </label>
          <input type="number" className="form-input" id="result"></input>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
