import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuthHook } from "@/providers/AuthProvider";

const NavActions = () => {
  const { user } = useAuthHook();
  return (
    <>
      {user ? (
        <Button asChild>
          <Link to="/profile">Profile</Link>
        </Button>
      ) : (
        <>
          <Button asChild>
            <Link to="/auth/login">Login</Link>
          </Button>
          <Button variant="outline" className="hidden md:block" asChild>
            <Link to="/auth/sign-up">Sign Up</Link>
          </Button>
        </>
      )}
    </>
  );
};

export default NavActions;
