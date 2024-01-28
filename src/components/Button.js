import React from "react";
import '../css/Button.css'

function Button(props) {

  const isOperator = value => {
    // This line checks if the provided value is not a number (isNaN(value)), and also not a period (.) or equals sign (=).
    // If all these conditions are true, it means the value is an operator (like +, -, *, /).
    // So, this function is used to determine if the given value is an operator.
    return isNaN(value) && (value !== '.') && (value !== '=');
  }

  return (
    <div className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.handleClick(props.children)} >
      {props.children}
    </div>
  )
}

export default Button;