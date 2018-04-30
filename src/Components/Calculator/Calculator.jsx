import React from "react";
import "./Calculator.css";

// CSS
  // Refactor the code to make it more dry

class Calculator extends React.Component {
  state = {
    displayValue: 0,
    firstVal: 0,
    secondVal: 0,
    operation: null
  };

  // This will display the values that the user clicks and stores them to our state for later computation
  displayValues(e) {
    const numericValue = e.target.textContent;
    const currentValue = this.state.displayValue;
    if (currentValue === 0 && this.state.operation === null) {
      this.setState({
        displayValue: (currentValue + numericValue).substr(1),
        firstVal: (currentValue + numericValue).substr(1)
      });
    } else if (this.state.operation === null) {
      this.setState({
        displayValue: currentValue + numericValue,
        firstVal: currentValue + numericValue
      });
    } else if (currentValue === 0) {
      this.setState({
        displayValue: (currentValue + numericValue).substr(1),
        secondVal: (currentValue + numericValue).substr(1)
      });
    } else {
      this.setState({
        displayValue: currentValue + numericValue,
        secondVal: currentValue + numericValue
      });
    }
  };


  // This will store the operation in our state for later use
  operationInput(e) {
    const operation = e.target.textContent;
    this.setState({
      displayValue: 0,
      operation
    })
  }
  
  // This will compute the operation between our first value and second value based on operation. 
  equalPress() {
    const firstVal = parseFloat(this.state.firstVal);
    const secondVal = parseFloat(this.state.displayValue);
    const operation = this.state.operation;
    switch(operation) {
      case('+'): {
        const output = firstVal + secondVal;
        this.setState({
          displayValue: firstVal + secondVal,
          firstVal: output 
        });
        break;
      }
      case('-'): {
        const output = firstVal - secondVal;
        this.setState({
          displayValue: firstVal - secondVal,
          firstVal: output 
        });
        break;
      }
      case('*'):{
        const output = firstVal * secondVal;
        this.setState({
          displayValue: firstVal * secondVal,
          firstVal: output 
        });
        break;
      }
      case('/'):{
        const output = firstVal / secondVal;
        this.setState({
          displayValue: firstVal / secondVal,
          firstVal: output 
        });
        break;
      }
      default: {
        this.setState({
          displayValue: 0
        });
      }
    }
  }

  // This reverts all of our state back to the default state of the application
  clear() {
    this.setState({
      displayValue: 0,
      firstVal: 0,
      secondVal: 0,
      operation: null
    });
  };

  // This allows us to add decimals to the current value
  decimal() {
    const currentValue = this.state.displayValue;
    const currentValueString = String(currentValue);
    if (currentValueString.indexOf(".") === -1) {
      this.setState({
        displayValue: currentValue + '.'
      });
    };
  };

  // This will inverse the sign of the current value
  inverse() {
    const currentValue = this.state.displayValue;
    if (this.state.operation === null) {
      this.setState({
        displayValue: -currentValue,
        firstVal: -currentValue
      });
    } else {
      this.setState({
        displayValue: -currentValue,
        secondVal: -currentValue
      });
    };
  }

  // This method will convert the current value to a percentage
  percentage() {
    const currentValue = parseInt(this.state.displayValue);
    if (this.state.operation === null) {
      this.setState({
        displayValue: currentValue / 100,
        firstVal: currentValue / 100
      });
    } else {
      this.setState({
        displayValue: currentValue / 100,
        secondVal: currentValue / 100
      });
    };
  };

  render() {
    return (
      <div className="wrapper">
        <div className="number-display test">{this.state.displayValue}</div>
 

        <div className="seven numeric" onClick={evt => this.displayValues(evt)}>7</div>
        <div className="eight numeric" onClick={evt => this.displayValues(evt)}>8</div>
        <div className="nine numeric" onClick={evt => this.displayValues(evt)}>9</div>
        <div className="four numeric" onClick={evt => this.displayValues(evt)}>4</div>
        <div className="five numeric" onClick={evt => this.displayValues(evt)}>5</div>
        <div className="six numeric" onClick={evt => this.displayValues(evt)}>6</div>
        <div className="one numeric" onClick={evt => this.displayValues(evt)}>1</div>
        <div className="two numeric" onClick={evt => this.displayValues(evt)}>2</div>
        <div className="three numeric" onClick={evt => this.displayValues(evt)}>3</div>
        <div className="zero numeric" onClick={evt => this.displayValues(evt)}>0</div>



        <div className="division operator" onClick={evt => this.operationInput(evt)}>/</div>
        <div className="multi operator" onClick={evt => this.operationInput(evt)}>*</div>
        <div className="minus operator" onClick={evt => this.operationInput(evt)}>-</div>
        <div className="plus operator" onClick={evt => this.operationInput(evt)}>+</div>


        <div className="clear numeric" onClick={() => this.clear()}>Clear</div>
        <div className="plus-minus numeric" onClick={() => this.inverse()}>+/-</div>
        <div className="percent numeric" onClick={() => this.percentage()}>%</div>
        <div className="dot numeric" onClick={() => this.decimal()}>.</div>
        <div className="equal operator" onClick={() => this.equalPress()}>=</div>

      </div>
    );
  }
}

export default Calculator;
