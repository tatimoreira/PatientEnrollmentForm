export const DefaultUser = {
  firstName: '',
  lastName: '',
  sex: '',
  dateOfBirth: Date,
  email: '',
  phoneNumber: '',
  streetAddress: '',
  city: '',
  state:'',
  zip:'',
  maritalStatus: '',
  medicalQuestions: {
    smoke: false,
    howOftenSmoke: '',
    alcohol: false,
    howOftenAlcohol: '',
    illicitDrugs: false,
    howOftenIllicitDrugs: '',
    currentMedication: '',
    medicationAllergies: '',
    medicationAllergiesList: '',
    surgeriesHospitalStays: '',
    typeSurgeriesHospitalStays: ''
  }
}

export interface StepProps{
  step: number;
  setStep:  (value: number | ((prevState: number) => number)) => void;
  user: UserProps;
  setUser:  (( info:{}) => void)
}

export interface UserProps {
  firstName: string;
  lastName: string;
  sex: string;
  dateOfBirth: Date;
  email: string;
  phoneNumber: string;
  streetAddress: string;
  city:string;
  state: string;
  zip:number;
  maritalStatus: 'married' | 'single' |  'divorced' | 'lifePartner'| 'separated' | 'widowed' | 'other',
  medicalQuestions: {
    smoke: boolean;
    howOftenSmoke: string;
    alcohol: boolean;
    howOftenAlcohol: string;
    illicitDrugs: boolean;
    howOftenIllicitDrugs: string;
    currentMedication: string;
    medicationAllergies: boolean;
    medicationAllergiesList: string;
    surgeriesHospitalStays: string;
    typeSurgeriesHospitalStays: string;
  }
}

export const UserReducer = (user: UserProps, { type, payload }) => {
  debugger
  switch (type) {
    case 'UPDATE_PERSONAL_INFO':
      return {
        ...user,
        ...payload,
      }
    case 'UPDATE_MEDICAL_INFO':
      return {
        ...user,
        medicalQuestions: {
          ...user.medicalQuestions,
          ...payload,
        },
      }

    default:
      return user
  }
}