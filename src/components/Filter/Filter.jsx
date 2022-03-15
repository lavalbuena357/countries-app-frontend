import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../redux/actions'

function Filter(props) {

  const activeFilters = useSelector(state => state.activeFilters)

  useEffect(() => {
    props.action()
  }, [activeFilters])

  const dispatch = useDispatch()

  function handleChange(e) {
    dispatch(setFilter(props.type, e.target.value))
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