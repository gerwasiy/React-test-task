import React from "react";

export function RegisterInput(props) {
  return (
    <div>
      <input
        style={
          props.test === false && !!props.value
            ? { borderColor: "#CB3D40", borderWidth: "2px" }
            : null
        }
        onChange={props.setValue}
        value={props.value}
        placeholder={props.placeholder}
      />
      <span
        style={
          props.test === false && !!props.value
            ? { display: "inline-block" }
            : null
        }
        className="helper-text error-text"
      >
        uncorrect format
      </span>
      <br />
      <span className="helper-text">{props.helperText}</span>
    </div>
  );
}
