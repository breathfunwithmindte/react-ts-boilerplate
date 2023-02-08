import FormAction, { FormActionTypes } from "./ActionType";
import FormReducerState, { FormReducerStateDefault } from "./FormReducerState";
import Formstate from "./FormState";


export default function FormReducerWrapper <T extends Formstate, A extends FormActionTypes, OC> () {
  return (state: FormReducerState<T>, action: FormAction<A, OC>) : FormReducerState<T> =>  {
  
    switch (action.type) {
      case "ONCHANGE": return { ...state, formState: {...state.formState, [action.payload.fieldName]: action.payload.value }  }
      case "ONCHANGE_FORM_GROUP": return { ...state, formState: {...state.formState, [action.payload.fieldName]: action.payload.value }  }
      case "ONCHANGE_FORM_ROLE": return { ...state }
      default: return state;
    }
  
  }
}


