import React from 'react'

const Counter = () => {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <h5>{count}</h5>
      <button onClick={() => setCount(count + 1)}>increase </button>
      <button onClick={() => setCount(count - 1)}>decrease </button>
    </div>
  )
}

export default Counter
