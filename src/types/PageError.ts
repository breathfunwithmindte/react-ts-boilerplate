import HttpStatus from "../enums/Status";
import GenericError from "./GenericError";


/**
 * Generic Error is not used for ui ... its just generic wrapper for an error....
 * It the other side PageError will be used to display something on ui ... for example an error at form submit
 */
export default interface PageError extends GenericError
{
  status: HttpStatus
}
