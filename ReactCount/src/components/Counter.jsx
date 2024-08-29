
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT, INCREMENT } from '../../Redux/Action'

const Counter = () => {

    const counter = useSelector(state => state.count)

    const dispatch = useDispatch()

  return (
    <div>
        <h1>Counter:{counter }</h1>
        <button onClick={()=>dispatch({type : INCREMENT})}>INCREMENT</button>
        <button onClick={()=>dispatch({type : DECREMENT})}>DECREMENT</button>
    </div>
  )
}

export default Counter