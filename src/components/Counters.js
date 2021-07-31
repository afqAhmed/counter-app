import React from 'react'
import Counter from './Counter'

const Counters = (props) => {
  const {onIncrement, onDecrement, onDelete, onReset, counters} = props
  return (
    <div>
      <button onClick={onReset} className="btn btn-info m-2">Reset</button>
      {counters.map(counter => (
        <Counter
          key={counter.id} 
          counter={counter} 
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete} />
      ))}
    </div>
  )
}

export default Counters