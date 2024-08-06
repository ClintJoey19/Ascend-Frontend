import { createContext, useReducer } from "react";

type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
  profileImg?: string;
};

enum ActionType {
  UPDATE_USER,
  LOGOUT,
}

type UserAction = {
  type: ActionType;
  payload?: User;
};

type InitState = {
  user: User | undefined;
};

const initialState: InitState = {
  user: undefined,
};

const reducer = (state: InitState, action: UserAction) => {
  // todo
};

const AuthProvider = () => {
  return <div>AuthProvider</div>;
};

export default AuthProvider;
