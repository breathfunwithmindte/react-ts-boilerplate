import Formstate from "../FormState";


export default interface RoleFormstate extends Formstate
{

  rolename: String | null,
  user: String | null,
  reading_scopes: String[],
  updating_scopes: String[],
  writing_scopes: String[],
  allow_delete: Boolean

}

const RoleFormstateDefault: RoleFormstate = {
  id: 0,
  rolename: null,
  user: null,
  reading_scopes: [],
  updating_scopes: [],
  writing_scopes: [],
  allow_delete: false
}

export { RoleFormstateDefault }