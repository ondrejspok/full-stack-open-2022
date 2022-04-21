const Header = (props) => {
  return(
  <h1>{props.course}
    </h1>
  )
}

const Part = (props) => {
  return(
  <p>{props.part} {props.excercise}</p>
  )
}

//not sure about this part if its okay solution, but it works... and content below looks weird too
const Content = (props) => {
  
  return(
    <div>
    <Part part={props.part1} excercise={props.excercise1} />
    <Part part={props.part2} excercise={props.excercise2} />
    <Part part={props.part3} excercise={props.excercise3} />
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of excercises {props.count}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} excercise1={exercises1} part2={part2} excercise2={exercises2} part3={part3} excercise3={exercises3} />        
      <Total count={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App