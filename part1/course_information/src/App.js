const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  console.log(props);
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  const partsList = props.parts.map((part) => (
    <Part name={part.name} exercises={part.exercises} />
  ));
  return <div>{partsList}</div>;
};

const Total = (props) => {
  const total = props.parts.reduce(
    (prevValue, currentValue) => prevValue + currentValue.exercises,
    0
  );
  return <p>Number of excercises {total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
