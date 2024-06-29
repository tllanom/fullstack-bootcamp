const Header = (props) => {
  console.log(props.course.name)
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props.course.parts[0])
  console.log(props.course.parts[1])
  console.log(props.course.parts[2])
  return (
    <div>
    <p>
      part1 is called '{props.course.parts[0].name}' and has {props.course.parts[0].exercises} exercises!
    </p>
    <p>
      part2 is called '{props.course.parts[1].name}' and has {props.course.parts[1].exercises} exercises!
    </p>
    <p>
      part3 is called '{props.course.parts[2].name}' and has {props.course.parts[2].exercises} exercises!
    </p>
    <br/>
    </div>
  )
}

const Total = (props) => {
  const sum = (p1,p2,p3) => {
    console.log(p1)
    console.log(p2)
    console.log(p3)
    return  p1 + p2 + p3
  }
  const result = sum(props.course.parts[0].exercises, props.course.parts[1].exercises, props.course.parts[2].exercises)
  console.log(result)
  return (
    <div>
      <p>Total number of exercises is {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}.</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course} />  
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App