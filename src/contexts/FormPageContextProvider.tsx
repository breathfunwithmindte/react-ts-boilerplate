import React, { createContext, useContext, useReducer, useState } from 'react'
import PageState, { PageStateDefault } from '../reducers/FormPageReducer/FormPage'
import FormPageStateReducer, { FormPageAction } from '../reducers/FormPageReducer/FormPageReducer'
import FormState from '../reducers/FormPageReducer/FormState'

type Props<T extends FormState> = {
  children: React.ReactNode,
  defaultState: PageState<T>
}

interface StateDispatch<T extends FormState> {
  state: PageState<T>,
  dispatch: React.Dispatch<FormPageAction>
}

const StateDispatchDefault : StateDispatch<any> = {
  state: PageStateDefault,
  dispatch: () => {}
}

const formPageContext = createContext(StateDispatchDefault);

/**
 * 
 * FormPageContextProvider need a generic type T for Formstate data type
 * The types of formstate usually will be in reducers/FormPageReducer/types
 * @param props 
 * @returns 
 */
const FormPageContextProvider = <T extends FormState> (props: Props<T>) => {
  const [state, dispatch] = useReducer(FormPageStateReducer, props.defaultState);

  return (
    <formPageContext.Provider value={{ state, dispatch }}>
      {props.children}
    </formPageContext.Provider>
  )
}

const useFormPage = <T extends FormState> () => {
  const state = useContext<StateDispatch<T>>(formPageContext);
  return state;
}

export {
  FormPageContextProvider
}

export default useFormPage;