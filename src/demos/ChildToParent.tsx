import React from 'react';

const Parent = () => {
  const handleNotifyParent = (timeStamp: string) => {
    console.log('Parent: the button in Child has been clicked at ', timeStamp);
  };

  return <Child notifyParent={handleNotifyParent} />;
};

interface ChildProps {
  notifyParent: (msg: string) => void;
}

const Child = ({ notifyParent }: ChildProps) => {
  const childClickHandler = () => {
    console.log('Child: you clicked on the button.');
    notifyParent((new Date()).toISOString());
  };

  return (
    <button className="btn btn-primary" onClick={childClickHandler}>
      Click Me
    </button>
  );
};

const ChildToParent = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default ChildToParent;
