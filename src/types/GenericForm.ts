import FieldType from "../enums/FieldType";


export interface Field {
  fieldName: string
  fieldType: FieldType
  placeholder: string | null
  label: string | null

}

export interface FormProp {
  title: string | null,
  fields: Field[],
  state: any,
  handleChange: Function
}