import Severity from "../enums/Severity";

/**
 * 
 * Generic Error for whole application
 * 
 */
export default interface GenericError {
  id:         String              // random id for each error
  status:     Number              // some number initially 0
  message:    String | null       // some message
  severity:   Severity | null     // severity
}