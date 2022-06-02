
import React, { useState, useCallback } from "react";


export function Button(props){

    const [isHover, setIsHover] = useState(props.backgroundColor);

    const onMouseEnter = useCallback(() => {
        setIsHover('#FFE302');
      }, []);
    
      const onMouseLeave = useCallback(() => {
        setIsHover(props.backgroundColor);
      }, []);

    return(
        <button 
       
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}

        disabled={props.disabled} id='button' style={{
            width:'100px',
            height:'34px',
            textAlign:'center',
             border:'none',
             borderRadius:'80px',
             margin:'0px 5px',
             alignSelf:props.alignSelf?props.alignSelf:null,
             color:props.color?props.color:null,
             backgroundColor:isHover,
             cursor:'pointer'
            }}>{props.text}</button>
    )
}