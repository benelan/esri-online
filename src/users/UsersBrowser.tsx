import React, { useState } from 'react';
import UserDetails from './UserDetails';
import { users } from '@speedingplanet/rest-server';

const UsersBrowser = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const nextUser = () => {
    const max = users.length - 1;
    const nextPosition = Math.min(currentPosition + 1, max);
    setCurrentPosition(nextPosition);
  };

  const previousUser = () => {
    setCurrentPosition(Math.max(0, currentPosition - 1));
  };

  return (
    <section>
      <div className="row">
        <div className="col">
          <UserDetails user={users[currentPosition]} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-info" onClick={previousUser}>
            Previous
          </button>
          &nbsp;
          <button className="btn btn-info" onClick={nextUser}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default UsersBrowser;
