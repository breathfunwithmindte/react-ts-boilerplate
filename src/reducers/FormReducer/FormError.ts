import PageError from "../../types/PageError";
import generateID from "../../utils/generateID";

export interface Field {
  fieldName: String,
  errorMessage: String
}

export default interface FormError extends PageError 
{
  fields: Field[]

}

const FormErrorDefault : FormError = {
  id: generateID(),
  status: 0,
  message: null,
  severity: null,
  fields: []
}

export { FormErrorDefault }