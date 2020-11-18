import React, { FC, useState } from 'react';
import Input from '../input';
import Button from '../button';
import Select from '../select';
import { StepProps } from './userReducer';

const booleanOptions = [
  {
    value: false,
    name: "No"
  },
  {
    value: true,
    name: "Yes"
  }
]


const MedicalInfo: FC<StepProps>  = ({ step, setStep, user, setUser }) => {
  const [errors, setErrors] = useState({})

  // handle onchange
  const handleUser = ({ target }) => {
    debugger
    setUser({
      type: 'UPDATE_MEDICAL_INFO',
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
      <Select
        name="smoke"
        options={booleanOptions}
        value={user.medicalQuestions.smoke}
        label="Do you smoke any tobacco products?"
        onChange={(e) => handleUser(e)}
      />
      {
        user.medicalQuestions.smoke === "true" && 
        (
          <Input
            type="text"
            name="howOftenSmoke"
            value={user.medicalQuestions.howOftenSmoke}
            label="How much and how often?"
            onChange={(e) => handleUser(e)}
          />

        )
      }
      <Select
        name="alcohol"
        options={booleanOptions}
        value={user.medicalQuestions.alcohol}
        label="Do you drink alcohol?"
        onChange={(e) => handleUser(e)}
      />
      {
        user.medicalQuestions.alcohol === "true" && 
        (
          <Input
            type="text"
            name="howOftenAlcohol"
            value={user.medicalQuestions.howOftenAlcohol}
            label="How much and how often?"
            onChange={(e) => handleUser(e)}
          />
        )
      }
      <Select
        name="illicitDrugs"
        options={booleanOptions}
        value={user.medicalQuestions.illicitDrugs}
        label="Have you regularly used illicit drugs?"
        onChange={(e) => handleUser(e)}
      />
      {
        user.medicalQuestions.illicitDrugs === "true" && 
        (
          <Input
            type="text"
            name="howOftenIllicitDrugs"
            value={user.medicalQuestions.howOftenIllicitDrugs}
            label="How much and how often?"
            onChange={(e) => handleUser(e)}
          />
        )
      }
      <Input
        type="text"
        label="Current medications"
        name="currentMedication"
        value={user.medicalQuestions.currentMedication}
        onChange={(e) => handleUser(e)}
      />
      <Input
        type="text"
        label="Medication allergies or reactions"
        name="medicationAllergies"
        value={user.medicalQuestions.medicationAllergies}
        onChange={(e) => handleUser(e)}
      />
      <Input
        type="text"
        label="Surgeries or hospital stays"
        name="surgeriesHospitalStays"
        value={user.medicalQuestions.surgeriesHospitalStays}
        onChange={(e) => handleUser(e)}
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

export default MedicalInfo;