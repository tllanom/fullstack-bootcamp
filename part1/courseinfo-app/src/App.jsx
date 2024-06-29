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
      part1 is called '{props.parts[0].name}' and has {props.parts[0].exercises} exercises!
    </p>
    <p>
      part2 is called '{props.parts[1].name}' and has {props.parts[1].exercises} exercises!
    </p>
    <p>
      part3 is called '{props.parts[2].name}' and has {props.parts[2].exercises} exercises!
    </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Total number of exercises is {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}.</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />  
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App