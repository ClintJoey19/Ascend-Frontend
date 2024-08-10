import apiRequest from "@/lib/apiRequest";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export type Role = "user" | "agent";

export type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: Role;
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
  user: User | null;
};

const initialState: InitState = {
  // user: JSON.parse(localStorage.getItem("user") as string) || null,
  user: null,
};

const reducer = (state: InitState, action: UserAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.UPDATE_USER:
      return {
        ...state,
        user: payload || null,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

interface AuthContextProps extends InitState {
  isSubmitting: boolean;
  login: (email: string, password: string) => void;
  updateUser: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  isSubmitting: false,
  login: (email: string, password: string) => {},
  updateUser: (user: User) => {},
  logout: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      setIsSubmitting(true);

      const res = await apiRequest.post("/auth/login", {
        email,
        password,
      });

      if (!res) throw new Error("Invalid Credentials");

      // update the localStorage and state
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch({ type: ActionType.UPDATE_USER, payload: res.data });

      toast.success("Login Successful");
      navigate("/");
    } catch (error: any) {
      console.error(error.message);
      toast.error(error.response.data.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  const updateUser = async (user: User) => {
    try {
      setIsSubmitting(true);

      const res = await apiRequest.put(`/users/${user.id}`, {
        ...user,
      });

      // if (!res) throw new Error("Invalid Credentials")

      // // update the localStorage and state
      // localStorage.setItem("user", JSON.stringify(res.data))
      // dispatch({type: ActionType.UPDATE_USER, payload: res.data})

      // toast.success("Update Successful")
      // navigate("/profile")
    } catch (error: any) {
      console.error(error.message);
      toast.error(error.response.data.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const logout = async () => {
    try {
      setIsSubmitting(true);

      const res = await apiRequest.post("/auth/logout");

      // update the localStorage and state
      localStorage.removeItem("user");
      dispatch({ type: ActionType.LOGOUT });

      toast.success("Logout Successful");
      navigate("/");
    } catch (error: any) {
      console.error(error.message);
      toast.error("There was an error logging out");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("user") as string);

    if (userToken) {
      dispatch({ type: ActionType.UPDATE_USER, payload: userToken });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isSubmitting,
        login,
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
  const { user, isSubmitting, login, updateUser, logout } =
    useContext(AuthContext);

  return { user, isSubmitting, login, updateUser, logout };
};
