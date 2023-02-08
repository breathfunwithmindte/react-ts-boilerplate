import OnChangeInterface from "../../types/Onchange";



enum PrimaryActionType {
  ONCHANGE = "ONCHANGE"
}

// define enum types

enum RoleActionType {
  ONCHANGE = "ONCHANGE",
  ONCHANGE_FORM_ROLE = "ONCHANGE_FORM_ROLE"
}

enum GroupActionType {
  ONCHANGE = "ONCHANGE",
  ON_CHANGE_GROUP = "ONCHANGE_FORM_GROUP"
}


// export like that, simulate extends for enums;

export {
  RoleActionType, GroupActionType
}

export type FormActionTypes = RoleActionType | GroupActionType;


export default interface FormAction <A extends FormActionTypes, OC> {
  type: A,
  payload: OnChangeInterface<OC>
}
