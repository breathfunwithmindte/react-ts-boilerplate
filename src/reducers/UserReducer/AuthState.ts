

export interface User {
  username: string,
  fullname: string,
  avatar: string,
  gender: string,
  email: string,
  phonenumber: string,
  roles: string[],
  groups: string[],
  superuser: Boolean,
  createdAt: string,
  updatedAt: string
}

export interface Notification {
  icon: String
}


/**
 * User type this will be return from login to solution - platform
 * https://<your domain>/api/v1/auth/portal/react/authenticated?client_id={{CLIENT_ID}}&client_secret={{CLIENT_SECRET}};
 */
export default interface AuthState {

 user: User | null,
 notifications: Notification[],
 unread_notifications: Number,
 messages: Number

}

const AuthStateDefault : AuthState = {
  user: null,
  notifications: [],
  unread_notifications: 0,
  messages: 0
}

export {
  AuthStateDefault
}