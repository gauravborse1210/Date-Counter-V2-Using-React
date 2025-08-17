import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // function handlePreviousStep() {
  //   if (step > 0) setStep(step - 1);
  // }

  // function handleNextStep() {
  //   setStep(step + 1);
  // }

  function handleNextCount() {
    step === 0 ? setCount(count + 1) : setCount(count + step);
  }

  function handlePreviousCount() {
    setCount(count - (step + 1));
  }

  const date = new Date();
  const dateToString = date.toDateString();

  const futureDate = new Date(date);
  futureDate.setDate(date.getDate() + count);

  const pastDate = new Date(date);
  pastDate.setDate(date.getDate() + count);

  return (
    <div>
      <div className="step">
        {/* <button onClick={handlePreviousStep}>-</button> */}
        {/* <p>Step: {step}</p> */}
        {/* <button onClick={handleNextStep}>+</button> */}
        <p>
          <input
            type="range"
            min={0}
            max={10}
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          {step}
        </p>
      </div>

      <div className="count">
        <button onClick={handlePreviousCount}>-</button>
        {/* <p>Count: {count}</p> */}
        <input
          type="text"
          value={count}
          // onSubmit={count > 0 ? handleNextCount : handlePreviousCount}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleNextCount}>+</button>
      </div>

      <p className="message">
        {count === 0
          ? `Today is ${dateToString}`
          : count > 0
          ? `${count} days from today is ${futureDate.toDateString()} `
          : ` ${Math.abs(count)} days ago was ${pastDate.toDateString()}`}
      </p>

      {count !== 0 || step !== 1 ? (
        <button
          onClick={() => {
            setCount(0);
            setStep(1);
          }}
        >
          Reset
        </button>
      ) : null}
    </div>
  );
}
