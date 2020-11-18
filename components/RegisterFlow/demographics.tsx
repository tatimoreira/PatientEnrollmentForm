import React, { FC, useState } from 'react'
import Input from '../input';
import Button from '../button';
import Select from '../select';
import { UserProps, StepProps } from './userReducer';

const sexOptions = [
  {
    value : "female",
    name: "Female"
  },
  {
    value : "male",
    name: "Male"
  }
]

const maritalSatusOptions = [
  {
    value : "single",
    name: "Single"
  },
  {
    value : "married",
    name: "Married"
  },
  {
    value : "divorced",
    name: "Divorced"
  },
  {
    value : "lifePartner",
    name: "Life Partner"
  },
  {
    value : "separated",
    name: "Separated"
  },
  {
    value : "widowed",
    name: "Widowed"
  },
  {
    value : "other",
    name: "Other"
  }
]

const Demographics: FC<StepProps>  = ({ step, setStep, user, setUser }) => {
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
        <Select
          name="sex"
          label="Sex"
          value={user.sex}
          options={sexOptions}
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
        <Select
          name="maritalStatus"
          label="Marital Status"
          value={user.maritalStatus}
          options={maritalSatusOptions}
          onChange={(e) => handleUser(e)}
        />
      </div>
      <Button type="submit" > Continue</Button>
    </form>
  )
}

export default Demographics;