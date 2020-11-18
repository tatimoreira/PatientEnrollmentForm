import React, { FC, useState } from 'react'
import PropTypes from 'prop-types'
import Input from '../input';
import Button from '../button';
import { StepProps } from './userReducer';
import { checkServerIdentity } from 'tls';


const Address: FC<StepProps>  = ({ step, setStep, user, setUser }) => {
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
    <form onSubmit={handleContinue}  className="w-full">
      <div >
        <Input
          type="text"
          label="Street Address"
          value={user.streetAddress}
          onChange={(e) => handleUser(e)}
          name="streetAddress"
        />
        <Input
          type="text"
          label="City"
          value={user.city}
          onChange={(e) => handleUser(e)}
          name="city"
        />
        <Input
          type="text"
          label="State"
          value={user.state}
          onChange={(e) => handleUser(e)}
          name="state"
        />
        <Input
          type="text"
          label="Zip"
          value={user.zip}
          onChange={(e) => handleUser(e)}
          name="zip"
        />
     
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button onClick={() => setStep(step - 1)} type="button">
          Back
        </Button>
        <Button type="submit"> Continue</Button>
      </div>
    </form>
  )
}

export default Address;