import React from "react";

export function RadioInput(props){ 

    return(
        <div>
        <input
          type='radio'
          checked={props.radio === props.value}
          onChange={props.setRadio}
          
          name='position'
          value={props.value}
        />
        <label>{props.value}</label>
      </div>
    )
}
