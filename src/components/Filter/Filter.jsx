import React from 'react'
import { useDispatch } from 'react-redux'

function Filter(props) {

  const dispatch = useDispatch()

  function handleChange(e) {
    dispatch(props.action(e.target.value))
  }

  return (
    <div>
      <select onChange={handleChange}>
        <option value="">{props.text}</option>
        {
          props.mapArr.map((el, i) => (
            <option key={i} value={props.valuePred(el)}>{props.optionsText(el)}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Filter