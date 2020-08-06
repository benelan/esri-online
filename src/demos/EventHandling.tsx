import React from 'react';

const outsideHandler = () => {
  console.log('You clicked on the button (handled outside)');
};

const EventHandling = () => {
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('You clicked on the button.');
    console.log("Here's the button you clicked on: ", event.currentTarget);
  };

  const argumentHandler = (value: any, event: any) => {
    console.log('You passed this value: ', value);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={clickHandler}>
        Click me
      </button>
      &nbsp;
      <button
        className="btn btn-warning"
        onClick={() => console.log('You clicked on the button (inline)')}
      >
        Click me (inline)
      </button>
      &nbsp;
      <button className="btn btn-info" onClick={outsideHandler}>
        Click me (outside handler)
      </button>
      &nbsp;
      <button className="btn btn-danger" onClick={(e) => argumentHandler('Hi', e)}>
        Click me (argument handler)
      </button>
    </div>
  );
};

export default EventHandling;
