import React, { FC, useState } from 'react'
import PropTypes from 'prop-types'
import Input from './input';
import Button from './button';
import { isInfo } from './validation'

interface UserDetailProps{
  step: number;
  setStep:  (() => void);
  user: {};
  setUser:  (( info:{}) => void)
}

const UserDetails: FC<UserDetailProps>  = ({ step, setStep, user, setUser }) => {
  const [errors, setErrors] = useState({})

  // handle onchange
  const handleUser = ({ target }) => {
    setUser({
      type: 'UPDATE_PERSONAL_INFO',
      payload: { [target.name]: target.value },
    })
  }
  const handleContinue = (e) => {
    e.preventDefault()
    const errors = isInfo(user)
    setErrors(errors)
    if (Object.keys(errors).length > 0) return
    setStep(step + 1)
  }
  return (
    <form onSubmit={handleContinue}>
      <Input
        type="text"
        name="firstName"
        value={user.firstName}
        label="First name"
        onChange={(e) => handleUser(e)}
        error={errors.firstName}
      />
      <Input
        type="text"
        name="lastName"
        value={user.lastName}
        label="Last name"
        onChange={(e) => handleUser(e)}
        error={errors.lastName}
      />
      <Input
        type="tel"
        label="Phone number"
        name="phoneNumber"
        value={user.phoneNumber}
        onChange={(e) => handleUser(e)}
        error={errors.phoneNumber}
      />
      <Input
        type="email"
        label="Email address"
        name="email"
        value={user.email}
        onChange={(e) => handleUser(e)}
        error={errors.email}
      />
      <Button type="submit"> Continue</Button>
    </form>
  )
}

export default UserDetails