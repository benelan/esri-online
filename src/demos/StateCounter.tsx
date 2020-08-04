import React, { useState } from 'react';

const StateCounter = () => {
  // const [currentValue, setter] = useState(initialValue);
  const [counter, setCounter] = useState(0);
  // const [person, setPerson] = useState(/* some Person object */);

  let nextCounter = counter + 1;

  const clickHandler = () => {
    console.log('Next value will be ', nextCounter);
    setCounter(nextCounter);
  }

  return (
    <div>
      <div>
        <p>Counter: {counter}</p>
      </div>
      <div>
        <button
          className="btn btn-danger"
          onClick={() => setCounter(counter - 1)}
        >
          Decrement
        </button>
        &nbsp;
        <button
          className="btn btn-success"
          onClick={clickHandler}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default StateCounter;
