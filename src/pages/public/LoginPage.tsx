import React, { useEffect } from 'react'
import useFormPage from '../../contexts/FormPageContextProvider'
import LoginFormState from '../../reducers/FormPageReducer/types/LoginPage';
import LoginForm from './LoginPage/LoginForm';

type Props = {}



const LoginPage = (props: Props) => {
  const {state, dispatch} = useFormPage<LoginFormState>();

  return(
    <div style={{
      width: "100vw", height: "100vh",
      backgroundImage: "url(/itsm.png)", 
      backgroundPosition: "center", 
      backgroundSize: "cover", 
      backgroundRepeat: "no-repeat"
      }} className="d-flex a-i-center j-c-center f-col">

        LoginPage: {state.pageName}
        username: {state.formState.loginValue}
        password: {state.formState.password}
        <LoginForm state={state.formState} dispatch={dispatch} />

    </div>
  )
}




export default LoginPage