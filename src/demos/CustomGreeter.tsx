import React from 'react';

interface CustomGreeterProps {
  firstName: string;
  lastName?: string;
  // lastName: string | undefined
}


const CustomGreeter = ({ firstName }: CustomGreeterProps) => {
  // let name = 'John';

  // let firstName = props.firstName
  //let { firstName } = props;

  return (
    <div>
      <p>Hello, {firstName}</p>
    </div>
  );
};

const UsingCustomGreeter = () => {
  return <CustomGreeter firstName="Sameer" />;
};

export default CustomGreeter;
export { UsingCustomGreeter };