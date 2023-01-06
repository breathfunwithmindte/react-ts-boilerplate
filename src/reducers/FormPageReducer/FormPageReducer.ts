import LoginFormState from "./types/LoginPage";
import IncidentFormState from "./types/IncidentPage";
import FormState from "./FormState";
import PageState, { PageStateLoginDefault } from "./FormPage";
import OnChangeInterface from "../../types/Onchange";
 

export type FormPageAction =
| { type: 'ONCHANGE_FORMSTATE_LOGIN'; payload: OnChangeInterface<string> }
| { type: 'ONCHANGE_FORMSTATE_INCIDENT'; payload: OnChangeInterface<string> }



function FormPageReducer (state: PageState<any>, action: FormPageAction) : PageState<any>
{
  console.log(state, action)
  
  switch (action.type) {
    case "ONCHANGE_FORMSTATE_LOGIN": return { ...state, formState: {...state.formState, [action.payload.fieldName]: action.payload.value }  }
    case "ONCHANGE_FORMSTATE_INCIDENT": return { ...state }
    default: return PageStateLoginDefault
  }

}
export default FormPageReducer;
