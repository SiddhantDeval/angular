type RegistrationStudent = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  agree: boolean;
  gender: 'Male' | 'Female' | string;
};
export { RegistrationStudent };
