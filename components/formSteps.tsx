import React from 'react'
import Demographics from './demographics';
import Address from './address';
import Conditions from './conditions';
import MedicalInfo from './medicalInfo';

const FormSteps = (step: number, setStep: (value: number | ((prevState: number) => number)) => void, user: {}, setUser:(( info:{}) => void)) => [
  {
    title: 'Personal Information',
    content: (
      <Demographics
        setStep={setStep}
        step={step}
        user={user}
        setUser={setUser}
      />
    ),
  },
  {
    title: 'Address',
    content: (
      <Address
        setStep={setStep}
        step={step}
        user={user}
        setUser={setUser}
      />
    ),
  },
  {
    title: 'Conditions',
    content: (
      <Conditions setStep={setStep} step={step} user={user} setUser={setUser} />
    ),
  },
  {
    title: 'Medical questions',
    content: <MedicalInfo setStep={setStep} step={step} user={user} setUser={setUser} />,
  },
]
export default FormSteps