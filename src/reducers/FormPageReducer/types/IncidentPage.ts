import FormState from "../FormState";


export default interface IncidentFormState extends FormState 
{
  title: String | null,
  category: String | null,
  description: String | null
  /** add more properties here */
}

const IncidentFormStateDefault: IncidentFormState = {
  id: 0,
  title: null,
  category: null,
  description: null
} 

const IncidentFormStateDefaultWithCategory: IncidentFormState = {
  id: 0,
  title: null,
  category: "software",
  description: null
}

export { IncidentFormStateDefault, IncidentFormStateDefaultWithCategory };