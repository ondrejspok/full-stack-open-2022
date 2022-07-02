const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => <p>Number of exercises {sum}</p>;

const Part = (props) => (
  <p>
    {props.partName} {props.partExercises}
  </p>
);

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part
          key={part.id}
          partName={part.name}
          partExercises={part.exercises}
        />
      ))}
    </div>
  );
};

const Course = (props) => {
  const total = props.course.parts.reduce(
    (prevValue, currentValue) => prevValue + currentValue.exercises,
    0
  );

  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total sum={total} />
    </div>
  );
};

export default Course;
