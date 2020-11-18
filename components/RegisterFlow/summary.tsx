import React, { FC, useState } from 'react';
import Button from '../button';
import { UserProps, StepProps } from './userReducer';

const Summary: FC<StepProps>  = ({ step, setStep, user, setUser }) => {
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
      <div >
        <div className="pt-8 divide-y divide-red-500">
          <div className="grid grid-cols-2 pb-4 pr-4 text-xl ">
            <span >First Name: {user.firstName}</span> 
            <span >Last Name:{user.lastName}</span> 
            <span >Sex:{user.sex}</span> 
            <span>Date of birth:{user.dateOfBirth}</span> 
            <span>Email: {user.email}</span> 
            <span>Phone Number: {user.phoneNumber}</span> 
            <span>Marital Status:{user.maritalStatus}</span> 
          </div>
          <div className="grid grid-cols-2 pb-4 pr-4 text-xl ">
            <span >Street Address: {user.streetAddress}</span> 
            <span >City:{user.city}</span> 
            <span >Sate:{user.state}</span> 
            <span>Zip:{user.zip}</span> 
          </div>
          <div className="grid grid-cols-2 pb-4 pr-4 text-xl ">
            <span > Tobacco?: {user.medicalQuestions.smoke === "true" ? "Yes" : "No"}</span> 
            {
              user.medicalQuestions.smoke === "true" &&
              (
                <div>
                  <span>How much and how often?:{user.medicalQuestions.howOftenSmoke}</span> 
                </div>
              )
            }
            <span > Alcohol?: {user.medicalQuestions.alcohol === "true" ? "Yes" : "No"}</span> 
            {
              user.medicalQuestions.alcohol === "true" &&
              (
                <div>
                  <span>How much and how often?:{user.medicalQuestions.howOftenAlcohol}</span> 
                </div>
              )
            }
            <span > Illicit drugs?: {user.medicalQuestions.illicitDrugs === "true" ? "Yes" : "No"}</span> 
            {
              user.medicalQuestions.illicitDrugs === "true" &&
              (
                <div>
                  <span>How much and how often?:{user.medicalQuestions.howOftenIllicitDrugs}</span> 
                </div>
              )
            }
            
          </div>
          <span>Current medications:{user.medicalQuestions.currentMedication}</span> 
          <span>Medication allergies or reactions:{user.medicalQuestions.medicationAllergies}</span> 
          <span>Surgeries or hospital stays:{user.medicalQuestions.surgeriesHospitalStays}</span> 
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <Button onClick={() => setStep(step - 1)} type="button">
            Back
          </Button>
          <Button type="submit"> Continue</Button>
        </div>
      </div>
    </form>
  )
}

export default Summary;