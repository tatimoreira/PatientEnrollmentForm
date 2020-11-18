import React from 'react'
import Demographics from './demographics';
import Address from './address';
import Conditions from './conditions';
import MedicalInfo from './medicalInfo';
import Terms from './terms';
import Summary from './summary';
import { UserProps } from './userReducer';

const FormSteps = (step: number, setStep: (value: number | ((prevState: number) => number)) => void, user: UserProps, setUser:(( info:{}) => void)) => [
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
  {
    title: 'Summary',
    content: <Summary setStep={setStep} step={step} user={user} setUser={setUser} />,
  },
  {
    title: 'Terms',
    content: <Terms setStep={setStep} step={step} user={user} setUser={setUser} />,
  },
]
export default FormSteps