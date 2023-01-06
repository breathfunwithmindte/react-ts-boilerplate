import React from 'react'
import { FormPageAction } from '../../../reducers/FormPageReducer/FormPageReducer'
import LoginFormState from '../../../reducers/FormPageReducer/types/LoginPage'

type Props = {
  state: LoginFormState,
  dispatch: React.Dispatch<FormPageAction>
}

const LoginForm = (props: Props) => {

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    props.dispatch({ type: "ONCHANGE_FORMSTATE_LOGIN", payload: { fieldName: e.currentTarget.name, value: e.currentTarget.value } })
  }

  return (
    <form style={{boxShadow: "0px 1.4px 6.9px 0.14px var(--background-4)", padding: "1.4rem", maxWidth: "693px", width: "100vw"}} className="bg-2 d-flex f-col a-i-center">
      <h1>Login Form</h1>
      <hr className="w-f" />
      <label className="bg-2 d-flex f-col w-f spy-3">
        <span className="spy-4">username or email or phonenumber</span>
        <input type={"text"} className="w-f" name="loginValue" value={props.state.loginValue || ""} placeholder="username or email or phonenumber" onChange={handleChange} />
      </label>
      <label className="bg-2 d-flex f-col w-f spy-3">
        <span className="spy-4">Password</span>
        <input type={"password"} className="w-f" name="password" value={props.state.password || ""} placeholder="password" onChange={handleChange} />
      </label>
      <button className="btn-primary w-f mt-2 mb-3">JOIN</button>
    </form>
  )
}

export default LoginForm;