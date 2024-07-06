import { useState } from 'react'

const Statistics = (props) => {
  const {good, neutral, bad} = props
  const all = good + neutral + bad
  const avg = ((good-bad)/all)
  const positive = (good/all)*100

  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>avg {avg}</p>
      <p>positive {positive}%</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => (setGood(good + 1))}>good</button>
      <button onClick={() => (setNeutral(neutral + 1))}>neutral</button>
      <button onClick={() => (setBad(bad + 1))}>bad</button>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App