import FormState from "../FormState";


export default interface LoginFormState extends FormState {
  loginValue: string | null
  password: string | null
}

const LoginFormStateDefault: LoginFormState = {
  id: 0,
  loginValue: null,
  password: null
} 

const LoginFormStateDefaultAdmin: LoginFormState = {
  id: 0,
  loginValue: "admin",
  password: null
}

export { LoginFormStateDefault, LoginFormStateDefaultAdmin };