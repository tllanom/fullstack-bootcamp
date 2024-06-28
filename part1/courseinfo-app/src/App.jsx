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
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const i = 0

return (
  <div>
    <Header course={course} />
    <Content i={i} part={part1.name} exercise={part1.exercises}/>
    <Content i={i+1} part={part2.name} exercise={part2.exercises}/>
    <Content i={i+2} part={part3.name} exercise={part3.exercises}/><br/>
    <Total exercises={part1.exercises+part2.exercises+part3.exercises}/>
  </div>
)

}

export default App