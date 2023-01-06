import Page from "../../types/Page";
import FormError from "./FormPageError";
import FormState from "./FormState";
import IncidentFormState, { IncidentFormStateDefault } from "./types/IncidentPage";
import LoginFormState, { LoginFormStateDefault, LoginFormStateDefaultAdmin } from "./types/LoginPage";


/** some complex page state ... but in most case propably useState will be used */
export default interface PageState<T extends FormState> extends Page {
 formState: T,
 error: FormError | null

}

const PageStateDefault: PageState<FormState> = {
  pageName: "default",
  formState: { id: 0 },
  error: null
}

const PageStateLoginDefault : PageState<LoginFormState> = {
  pageName: "login_page",
  formState: LoginFormStateDefault,
  error: null
}

const PageStateIncidentDefault : PageState<IncidentFormState> = {
  pageName: "incident_page",
  formState: IncidentFormStateDefault,
  error: null
}


export {
  PageStateLoginDefault,
  PageStateIncidentDefault,
  PageStateDefault
}


