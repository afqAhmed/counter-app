import React from 'react'

const Counter = (props) => {
  const {onIncrement, onDecrement, onDelete, counter} = props
  const formatter = () => {
    return counter.value === 0 ? 'Zero' : counter.value
  }

  const badgeClass = () => {
    let badgeClass = "badge m-2 p-2 bg-"
    badgeClass += counter.value === 0 ? "secondary" : "primary"
    return badgeClass
  }

  return (
    <div>
      <span className={badgeClass()}>{formatter()}</span>
      <button onClick={() => onIncrement(counter.id)} className="btn btn-success btn-sm m-2 px-2">+</button>
      <button onClick={() => onDecrement(counter.id)} className="btn btn-warning btn-sm m-2 px-2">-</button>
      <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm m-2 p-1">Delete</button>
    </div>
  )
}

export default Counter