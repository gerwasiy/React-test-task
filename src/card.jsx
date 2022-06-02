import React from 'react';

export function Card(props) {
  return (
    <div style={{
        backgroundColor:'#FFF',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'10px',
        padding:'20px',
        margin:props.margin?props.margin:null,
        maxWidth:'100%'
        }}>
      <img style={{width:'70px',borderRadius:'100%'}} src={props.image} alt='avatar'/>
      <div style={{textAlign:'center'}}>
        <p style={{margin:'20px 0px'}}>{props.name}</p>
        <p>{props.pos}<br/>{props.mail}<br/>{props.phone}</p>
      </div>
    </div>
  );
}
