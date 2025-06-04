import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export default function Porcer() {
  const dispatch = useDispatch()

  const obj = useSelector(state => state)
  return (
    <div className='block'>
      <p>{obj.text}</p>
      <button onClick={() => {
          dispatch({type: 'name', payload: 'Arman'})
      }}>Click here</button>
    </div>
  )
}
