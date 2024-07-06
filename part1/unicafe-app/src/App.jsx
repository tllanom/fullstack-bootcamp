import { useState } from 'react'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <p>{text} {value}</p>
)

const Statistics = (props) => {
  const {good, neutral, bad} = props
  const all = good + neutral + bad
  const avg = ((good-bad)/all)
  const positive = (good/all)*100

  if (all == 0) {
    return (
      <div>No feedback given</div>
    )
  }

  return (

    <div>
      <StatisticLine text="good" value ={good}/>
      <StatisticLine text="neutral" value ={neutral}/>
      <StatisticLine text="bad" value ={bad}/>
      <StatisticLine text="all" value ={all}/>
      <StatisticLine text="avg" value ={avg}/>
      <StatisticLine text="positive" value ={positive + '%'}/>
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
      <Button onClick={() => setGood(good + 1)} text = 'good'/>
      <Button onClick={() => setNeutral(neutral + 1)} text = 'neutral'/>
      <Button onClick={() => setBad(bad + 1)} text = 'bad'/>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App