export const DefaultUser = {
  firstName: '',
  lastName: '',
  sex: '',
  dateOfBirth: '',
  email: '',
  phoneNumber: '',
  streetAddress: '',
  city: '',
  state:'',
  zip:'',
  maritalStatus: '',
  madicalQuestions: {
    smoke: '',
    howOftenSmoke: '',
    alcohol: '',
    howOftenAlcohol: '',
    currentMedication: '',
    medicationAllergies: '',
    medicationAllergiesList: '',
    surgeriesHospitalStays: '',
    typeSurgeriesHospitalStays: ''
  }
}

interface UserProps {
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
  madicalQuestions: {
    smoke: boolean;
    howOftenSmoke: string;
    alcohol: boolean;
    howOftenAlcohol: string;
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
        madicalQuestions: {
          ...user.madicalQuestions,
          ...payload,
        },
      }

    default:
      return user
  }
}