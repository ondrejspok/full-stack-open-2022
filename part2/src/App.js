
const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Course = (props) => {
  
  const parts = props.course.parts.map(course =>
    <li key={course.id}>{course.name} {course.exercises}</li>
  )

  const total = props.course.parts.reduce(
    (prevValue, currentValue) => prevValue + currentValue.exercises, 0
  )

  return (
    <div>
     <Header course={props.course.name}/> 
     {parts}
     <Total sum={total} />
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
    ]
  }

  return <Course course={course} />
}

export default App