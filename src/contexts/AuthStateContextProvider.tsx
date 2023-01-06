import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import AuthState, { AuthStateDefault, User } from '../reducers/UserReducer/AuthState'
import AuthStateReducer, { AuthStateAction } from '../reducers/UserReducer/AuthStateReducer'

type Props = {
  children: React.ReactNode,
}

interface StateDispatch {
  state: AuthState,
  dispatch: React.Dispatch<AuthStateAction>
}

const StateDispatchDefault : StateDispatch = {
  state: AuthStateDefault,
  dispatch: () => {}
}

const authStateContext = createContext(StateDispatchDefault);

const TestUser: User = {
  username: "@Nancy~2314",
  email: "nancy@perfect-evolution.com",
  fullname: "Nancy NLast",
  avatar: "/default-avatar.webp",
  roles: [],
  groups: [],
  superuser: true,
  gender: "female",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  phonenumber: "000123456789"
} 

/**
 * 
 * @param props 
 * @returns 
 */
const AuthStateContextProvider = (props: Props) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [state, dispatch] = useReducer(AuthStateReducer, AuthStateDefault);

  useEffect(() => {
    dispatch({  type: "SET_AUTHSTATE", payload: { user: TestUser, notifications: [], unread_notifications: 2, messages: 2 }  })
    setTimeout(() => setLoading(false), 500)
  }, [])

  if(loading) return <p>loading...</p>
  return (
    <authStateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </authStateContext.Provider>
  )
}

const useAuth = () => {
  const state = useContext<StateDispatch>(authStateContext);
  return state;
}

export {
  AuthStateContextProvider
}

export default useAuth;