import React, {useEffect, useState} from 'react'

const UseEffect = () => {
  const [foo, setFoo] = useState('foo');

  // useEffect(functionToRun, [dependencies]?)
  // when dependencies change, re-run the effect

  useEffect(() => {
    console.log('I run on every render');
  });

  useEffect(() => {
    console.log('I run when foo changes');
    console.log('Foo is ', foo);
  }, [foo]); // similar to componentDidUpdate() { if foo...}

  useEffect(() => {
    console.log('I run once on initial mounting to the DOM')
  }, []); // similar to componentDidMount

  return (
    <div>
      
    </div>
  )
}

export default UseEffect
