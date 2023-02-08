import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './styles/app.css';
import FormPage from './pages/FormPage';
import {
  Route, 
  Routes
} from 'react-router-dom';

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
import GenericForm from './components/GenericForm';
import { Field } from './types/GenericForm';
import FieldType from './enums/FieldType';


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
      <div className="bg-2 w-f" style={{padding: "3.4rem"}}>

        <Routes>
          <Route path="/" element={<div> Page 1 </div>} />
          <Route path="/itsm/:pagename" element={<div> Page 2 </div>} />
          <Route path="/itsm/incident" element={<div> Page 3 </div>} />
          <Route path="/solutions" element={<div> Page 4 </div>} />
          <Route path="/dbs" element={<div> Page 5 </div>} />
        </Routes>

        <GenericForm title={null} fields={[
          { fieldName: "groupname", fieldType: FieldType.TEXTFIELD, label: "Group Name", placeholder: null  },
          { fieldName: "groupname", fieldType: FieldType.TEXTFIELD, label: "Group Name", placeholder: null  },
          { fieldName: "client_id", fieldType: FieldType.TEXTFIELD, label: "Client ID", placeholder: null  },
          { fieldName: "client_secret", fieldType: FieldType.TEXTFIELD, label: "Client Secret", placeholder: null  }
        ]} handleChange={(event: any, field: Field) => {console.log("hello")}} state={{}} />

      </div>
    </AuthenticatedLayout>
  );
}

export default App;
