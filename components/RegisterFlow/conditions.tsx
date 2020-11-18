import React, { FC, useState } from 'react'
import Input from '../input';
import Button from '../button';
import { StepProps } from './userReducer';

const Conditions: FC<StepProps>  = ({ step, setStep, user, setUser }) => {
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
    setErrors(errors)
    if (Object.keys(errors).length > 0) return
    setStep(step + 1)
  }
  return (
    <form onSubmit={handleContinue}>
      <Input
        type="text"
        name="firstName"
        label="Conditions"
      />
      <Input
        type="text"
        name="lastName"
        label="Last name"
      />
      <Input
        type="tel"
        label="Phone number"
        name="phoneNumber"
      />
      <Input
        type="email"
        label="Email address"
        name="email"
      />
      <div className="grid grid-cols-2 gap-2">
        <Button onClick={() => setStep(step - 1)} type="button">
          Back
        </Button>
        <Button type="submit"> Continue</Button>
      </div>
    </form>
  )
}

export default Conditions;