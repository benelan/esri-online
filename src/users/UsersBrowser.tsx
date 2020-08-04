import React, {useState} from 'react';
import UserDetails from './UserDetails';
import { users } from '@speedingplanet/rest-server';

const UsersBrowser = () => {
  const [currentPosition, setCurrentPosition] = useState(0)

  return (
    <section>
      <div className="row">
        <div className="col">
          <UserDetails user={users[currentPosition]}/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-info">Previous</button>
          &nbsp;
          <button className="btn btn-info">Next</button>
        </div>
      </div>
    </section>
  );
};

export default UsersBrowser;
