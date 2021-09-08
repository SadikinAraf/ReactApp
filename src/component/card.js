
import React from 'react'

export default function Card1(props) {
return (
    <div className={props.classCss}>

       <div className="style2">
        <div className="cardBack"></div>
           <div className="circleImg">{props.name.charAt(0)}</div>

       <h1 className="cardH1">{props.name}</h1>

        <p className="cardP"> {props.desc} </p>

        <a target="_blank"><button className="cardBtn" >{props.btext}</button></a>
  
       </div>

    </div>
)
}
