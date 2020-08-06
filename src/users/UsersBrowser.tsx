import React, { useState } from 'react';
import UserDetails from './UserDetails';
import BrowserButtons from '../common/BrowserButtons';
import { User } from '@speedingplanet/rest-server';

interface UsersBrowserProps {
  users: User[];
}

const UsersBrowser = ({ users }: UsersBrowserProps) => {
  const [currentPosition, setCurrentPosition] = useState(users.length - 1);

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
        <div className="col mt-2">
          <BrowserButtons
            previousEnabled={!!currentPosition}
            nextEnabled={currentPosition < users.length - 1}
            previousItem={previousUser}
            nextItem={nextUser}
          />
        </div>
      </div>
    </section>
  );
};

export default UsersBrowser;
