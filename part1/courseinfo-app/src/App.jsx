
const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
    <p>
      part{props.i} is called '{props.part}' and has {props.exercise} exercises!
    </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Total number of exercises is {props.exercises}.</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const i = 1

return (
  <div>
    <Header course={course} />
    <Content i={i} part={part1} exercise={exercises1}/>
    <Content i={i+1} part={part2} exercise={exercises2}/>
    <Content i={i+2} part={part3} exercise={exercises3}/><br/>
    <Total exercises={exercises1+exercises2+exercises3}/>
  </div>
)

}

export default App