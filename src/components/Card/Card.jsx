import React from 'react'

function Card(props) {
  return (
    <div>
      <div>
        <img src={props.coat} alt="coat" />
        <img src={props.flag} alt="coat" />
      </div>
      <div>
        <h3>{props.code}</h3>
        <h2>{props.name}</h2>
        <h4>{props.continent}</h4>
        <div>
          {
            props.lang.map((el, i) => (
              <span key={i}>{el.name}</span>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Card