import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './styles/app.css';
import FormPage from './pages/FormPage';

import PageStateReducer from './reducers/FormPageReducer/FormPageReducer';
import LoginFormState from './reducers/FormPageReducer/types/LoginPage';
import { FormPageContextProvider } from './contexts/FormPageContextProvider';
import LoginPage from './pages/public/LoginPage';
import { PageStateLoginDefault } from './reducers/FormPageReducer/FormPage';
import useAuth from './contexts/AuthStateContextProvider';
import AuthenticatedLayout from './layouts/AuthenticatedLayout';
import { useFetch } from './hooks/useFetch';
import PageError from './types/PageError';
import { useOnClickOutside } from './hooks/useOnClickOutside';


function App() {
  const { state, dispatch } = useAuth();
  const [response, error, loading] = useFetch<{  }>("http://localhost:5000/api/v1/user/portal/react/authenticated")
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => console.log('clicked outside'));

  console.log(response, error, loading)

  if(state.user === null) return (
    <div className="App">
      <FormPageContextProvider<LoginFormState> defaultState={PageStateLoginDefault}>
        <LoginPage />
        <h1>asdasd</h1>
      </FormPageContextProvider>
    </div>
  )
  return (
    <AuthenticatedLayout>
      <div className="bg-2" style={{padding: "3.4rem"}}>
      <h1>yeah authennticated</h1>
      <input className="m-5" type="text" />
      <button>some bnutton</button><br />
      <button className="btn-primary">some bnutton</button><br /><hr />
      <button className="btn-secondary">some bnutton</button><br /><hr />
      <button className="btn-success">some bnutton</button><br /><hr />
      <button className="btn-danger">some bnutton</button><br /><hr />
      <input type="checkbox" /> <br />
      <input type="checkbox" /><br />
      <input type="checkbox" /><br />
      <input type="radio" name="asdasd" id="asdasd" /><br />
      <input type="radio" name="asdasd" id="asdasd" />

      <div ref={ref}>Click anywhere outside this element to log a message</div>

      </div>
    </AuthenticatedLayout>
  );
}

export default App;
