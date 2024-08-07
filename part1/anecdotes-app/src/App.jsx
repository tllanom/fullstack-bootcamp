import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  console.log({selected})
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  console.log(points)
  const [maximum, setMaximum] = useState(0)

  const addition = (index) => {
    const newPoints = [...points]
    newPoints[index] += 1
    setPoints(newPoints)

    const maxPoints = Math.max(...newPoints)
    const maxIndex = newPoints.indexOf(maxPoints)
    setMaximum(maxIndex)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <br/>
      <button onClick={() => setSelected(Math.floor(Math.random()*8))}>next</button> 
      <br/>
      This anecdote has {points[selected]} points!
      <br/>
      <button onClick ={() => addition(selected)}>vote</button>
      <h2>Most voted</h2>
      {anecdotes[maximum]}
    </div>
  )
}

export default App