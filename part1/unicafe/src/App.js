import { useState } from "react";

const Button = (props) => {
  return (
      <button onClick={props.handleClick}>
        {props.text}
        </button>
  );
};

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Stats = (props) => {
  if (props.allClicks === 0) {
    return <p>No stats yet</p>;
  } else {
    return (
      <table>
        <tbody>
          <StatisticsLine text="Good" value={props.good} />
          <StatisticsLine text="Neutral" value={props.neutral} />
          <StatisticsLine text="Bad" value={props.bad} />
          <StatisticsLine text="Count" value={props.count} />
          <StatisticsLine text="Average" value={props.avrg} />
          <StatisticsLine text="Positive %" value={props.posit} />
        </tbody>
      </table>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = (good * 1 + bad * -1) / all;
  const positive = (good / all) * 100;

  const setToGood = (newGood) => {
    console.log("new good", newGood);
    setGood(newGood);
  };

  const setToNeutral = (newNeutral) => {
    console.log("new neutral", newNeutral);
    setNeutral(newNeutral);
  };

  const setToBad = (newBad) => {
    console.log("new bad", newBad);
    setBad(newBad);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text="Good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="Bad" />
      <h1>Statistics</h1>

      <Stats
        allClicks={all}
        good={good}
        neutral={neutral}
        bad={bad}
        count={all}
        avrg={average}
        posit={positive}
      />
    </div>
  );
};

export default App;
