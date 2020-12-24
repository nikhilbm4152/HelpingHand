import React from 'react'

import './CardTabs.css'


const CardTabs = (props) => {
  
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front ">
        <img className="flip-card-front-image" src={props.Image} alt={props.Header}></img>
         {props.Header}
        </div>
        <div className="flip-card-back">
          <p className="flip-back-dis">{props.Description}</p>
          <button className="btn paper paper-raise" type="submit">Download</button>
        </div>
      </div>

    </div>
  )
}

export default CardTabs
