const vals = ['one', 'two', 'three'];

vals.sort((a, b) => {
  // If a sorts before b, return >= 1
  // if a and b are equal, return 0
  // if a sorts after b, return <=-1

  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }

  return 0;
});

export {};
