import React, { useState, useEffect } from 'react';
import { dao } from '@speedingplanet/rest-server';

const RemoteData = () => {
  const [transactionCount, setTransactionCount] = useState(0);

  useEffect(() => {
    dao.findAllTransactions().then((response) => {
      setTransactionCount(response.data.length);
    });
  }, []);

  return (
    <div>
      <p>Transaction count: {transactionCount}</p>
    </div>
  );
};

export default RemoteData;
