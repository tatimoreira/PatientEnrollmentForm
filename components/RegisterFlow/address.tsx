import React, { FC, useState } from 'react'
import PropTypes from 'prop-types'
import Input from '../input';
import Button from '../button';
import { StepProps } from './userReducer';


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
          name="streetAddress"
        />
        <Input
          type="text"
          label="City"
          name="city"
        />
        <Input
          type="text"
          label="State"
          name="state"
        />
        <Input
          type="text"
          label="Zip"
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