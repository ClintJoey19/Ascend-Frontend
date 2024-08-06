import apiRequest from "@/lib/apiRequest";
import { createContext, useContext, useReducer, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
  user: JSON.parse(localStorage.getItem("user") as string) || undefined,
};

const reducer = (state: InitState, action: UserAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.UPDATE_USER:
      return {
        ...state,
        user: payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
};

interface AuthContextProps extends InitState {
  isSubmitting: boolean;
  updateUser: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: initialState.user,
  isSubmitting: false,
  updateUser: (user: User) => {},
  logout: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(true);
  const navigate = useNavigate();

  const updateUser = (user: User) => {
    try {
      setIsSubmitting(true);
      dispatch({ type: ActionType.UPDATE_USER, payload: user });
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const logout = () => {
    try {
      console.log("click");

      // setIsSubmitting(true);

      // // performs logout
      // const res = await apiRequest.post("/auth/logouts");

      // if (!res) throw new Error("There was an error logging out");

      // // update the local storage and the state
      // localStorage.removeItem("user");
      // dispatch({ type: ActionType.LOGOUT });

      // toast.success(res.data.message);
      // navigate("/");
    } catch (error: any) {
      console.error(error.message);
      toast.error("There was an error logging out");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isSubmitting: isSubmitting,
        updateUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthHook = () => {
  const { user, isSubmitting, updateUser, logout } = useContext(AuthContext);

  return { user, isSubmitting, updateUser, logout };
};
