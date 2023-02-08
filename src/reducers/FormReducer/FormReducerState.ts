import FormError from "./FormError";
import Formstate from "./FormState";
import GroupFormstate from "./types/GroupForm";
import RoleFormstate, { RoleFormstateDefault } from "./types/RoleForm";


/** some complex page state ... but in most case propably useState will be used */

export default interface FormReducerState<T extends Formstate>
{
  formState: T,
  error: FormError | null
}

const FormReducerStateDefault: FormReducerState<Formstate> = { formState: { id: 0 }, error: null }
const GroupFormReducerStateDefault: FormReducerState<GroupFormstate> = { formState: { id: 0, groupname: null }, error: null }
const RoleFormReducerStateDefault: FormReducerState<RoleFormstate> = { formState: RoleFormstateDefault, error: null }



export {
  FormReducerStateDefault,
  GroupFormReducerStateDefault,
  RoleFormReducerStateDefault
}


