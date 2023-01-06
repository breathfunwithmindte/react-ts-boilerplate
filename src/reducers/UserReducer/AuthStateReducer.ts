import AuthState, { User, Notification, AuthStateDefault } from "./AuthState";

export type AuthStateAction =
| { type: 'SET_AUTHSTATE'; payload: AuthState }
| { type: 'NEW_NOTIFICATION'; payload: Notification }

function AuthStateReducer (state: AuthState, action: AuthStateAction) : AuthState 
{

  switch (action.type) {
    case "SET_AUTHSTATE": return action.payload
    case "NEW_NOTIFICATION": return { ...state, notifications: [...state.notifications, action.payload] }
    default: return AuthStateDefault
  }

}

export default AuthStateReducer;