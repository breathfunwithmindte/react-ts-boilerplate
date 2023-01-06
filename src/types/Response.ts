import HttpStatus from "../enums/Status";


export default interface Response <T> {
  status: HttpStatus,
  message: String | null
  data: T
}