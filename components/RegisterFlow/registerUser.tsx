import React, { useReducer, useState } from 'react'
import { UserReducer, DefaultUser } from './userReducer';
import FormSteps from './formSteps';

const RegisterUser = () => {
  let [step, setStep] = useState(0)
  const [user, setUser] = useReducer(UserReducer, DefaultUser)
  let steps = FormSteps(step, setStep, user, setUser)

  return (
    <div className="p-16 text-base ">
      <h1 className="text-3xl text-center">Register User: {steps[`${step}`].title} </h1>
      <h4 className="text-xl text-center">
        Step {step + 1}/{steps.length}
      </h4>
      <div >{steps[`${step}`].content}</div>
    </div>
  )
}
export default RegisterUser