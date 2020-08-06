import React, { useState, useEffect } from 'react';
import { dao } from '@speedingplanet/rest-server';

const runOnce: any[] = [];

const RemoteData = () => {
  const [transactionCount, setTransactionCount] = useState(0);

  useEffect(() => {
    dao
      .findAllTransactions({_delay: 5000})
      .then(({ data }) => {
        setTransactionCount(data.length);
      })
      .catch((error) => console.error('Something went wrong'));
  }, runOnce);

  return (
    <div>
      <p>Transaction count: {transactionCount}</p>
    </div>
  );
};

export default RemoteData;
