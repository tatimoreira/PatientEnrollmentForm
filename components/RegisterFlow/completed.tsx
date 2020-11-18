
import React from 'react';
export const Completed = ({ user }) => (
  <div  className="text-2xl text-center">
    <p>
      Welcome, <b>{`${user.firstName} ${user.lastName}`}</b>{' '}
    </p>
    <p> You have successfully registered</p>
  </div>
)
export default Completed
