import React, { FC, useState } from 'react'
import PropTypes from 'prop-types'
import Input from './input';
import Button from './button';

interface DemographicsInfo{
  step: number;
  setStep:  (() => void);
  user: {};
  setUser:  (( info:{}) => void)
}

const Demographics: FC<DemographicsInfo>  = ({ step, setStep, user, setUser }) => {
  const [errors, setErrors] = useState({})

  // handle onchange
  const handleUser = ({ target }) => {
    debugger
    setUser({
      type: 'UPDATE_PERSONAL_INFO',
      payload: { [target.name]: target.value },
    })
  }
  const handleContinue = (e) => {
    e.preventDefault()
    setErrors(errors)
    if (Object.keys(errors).length > 0) return
    setStep(step + 1)
  }
  return (
    <form onSubmit={handleContinue}  className="w-full">
      <div >
        <Input
          type="text"
          name="firstName"
          label="First name"
          value={user.firstName}
          onChange={(e) => handleUser(e)}
        />
        <Input
          type="text"
          name="lastName"
          label="Last name"
          value={user.lastName}
          onChange={(e) => handleUser(e)}
        />
        <Input
          type="text"
          label="Sex"
          name="sex"
          value={user.sex}
          onChange={(e) => handleUser(e)}
        />
        <Input
          type="date"
          label="Date of birth"
          name="dateOfBirth"
          value={user.dateOfBirth}
          onChange={(e) => handleUser(e)}
        />
        <Input
          type="email"
          label="Email"
          name="email"
          value={user.email}
          onChange={(e) => handleUser(e)}
        />
        <Input
          type="text"
          label="Phone Number"
          name="phoneNumber"
          value={user.phoneNumber}
          onChange={(e) => handleUser(e)}
        />
        <Input
          type="text"
          label="Marital Status"
          name="maritalStatus"
          value={user.maritalStatus}
          onChange={(e) => handleUser(e)}
        />
      </div>
      <Button type="submit" > Continue</Button>
    </form>
  )
}

export default Demographics;