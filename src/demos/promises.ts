function generatePromise(): Promise<string> {
  // Does something to generate a Promise
  // return Promise.resolve('hello');
  // return Promise.reject('FAILED');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Date.now() % 2 ? resolve('success!') : reject('failure');
    }, 2000);
  });
}

const p = generatePromise();

// p.then(onSuccess, onError)
p.then((value) => {
  console.log('The promise returned ', value);
});

p.then(null, (error) => console.error('Something went wrong!'));
p.catch((error) => console.error('Something went wrong!'));


p.then(
  (value) => console.log('Got a value!'),
  (error) => console.error('Got an error!'),
);

p.then((value) => {
  console.log('The value was: ', value);
  return value;
})
.then(value => {
  return 10;
})
.then(ten => {
  return true;
})
.then(bool => {
  // etc.
})
.catch(error => {
  // Handle the error
});


p.then((value) => {
  // case 1: return 10;
  // case 2: no return value
  // case 3: throw Error('oh no!');
  // case 4: return Promise.reject('rejected!');
  // case 9: return fetch() (generates its own new Promise);
})
.then((next) => {
  // case 1: next is 10
  // case 2: next is undefined

  // case 5: return 'Hello'

  // case 9: receives any success value for the new Promise
})
.catch((error) => {
  // case 3: Handle Error('oh no')
  // case 4: Handle rejected value 'rejected!'

  // case 6: return 'Hi'
  // case 7: no return statement
  // case 8: pass it along: return Promise.reject(old or new value)

  // case 9: receives any error for the new Promise
})
.then(value => {
  // case 5: value is 'Hello'
  // case 6: value is 'Hi'
  // case 7: value is undefined

}, (error) => {
  // case 8: error is whatever was rejected along
})

export {};
