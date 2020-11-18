import React, { FC, useState } from 'react';
import { StepProps } from './userReducer';
import Button from '../button';

const Terms: FC<StepProps>  = ({ step, setStep, user, setUser }) => {
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
      <p className="pt-8 pb-8">Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. 
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. 
        Maecenas sed diam eget risus varius blandit sit amet non magna.
        Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. 
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
        Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.
      </p>
      <div >
        <label>Are you agree?</label>
        <input type="checkbox"  onChange={(e) => handleUser(e)} />
      </div>
      
      <div className="grid grid-cols-2 gap-2">
          <Button onClick={() => setStep(step - 1)} type="button">
            Back
          </Button>
          <Button type="submit"> Submit</Button>
        </div>
    </form>
  )
}

export default Terms;