import React, { useState } from 'react'
import Counters from './components/Counters'
import Navbar from './components/Navbar'

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 2 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 8 },
  ])
  
  const handleIncrement = (counterId) => {
    const newCounters = [...counters]
    const index = newCounters.findIndex(counter => counter.id === counterId)
    newCounters[index].value++
    setCounters(newCounters) 
  }

  const handleDecrement = (counterId) => {
    const newCounters = [...counters]
    const index = newCounters.findIndex(counter => counter.id === counterId)

    if(newCounters[index].value > 0) {
      newCounters[index].value--
    }
      setCounters(newCounters)
  }

  const handleDelete = (counterId) => {
    const newCounters = [...counters].filter(c => c.id !== counterId)
    setCounters(newCounters)
  }

  const handleReset = () => {
    const newCounters = counters.map(e => {
      e.value = 0
      return e
    })
    setCounters(newCounters)
  }
  return (
    <div className="container">
      <Navbar totalCounters={counters.filter(c => c.value > 0).length} />
      <Counters
        counters={counters}
        onReset={handleReset}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete} />
    </div>
  )
}

export default App