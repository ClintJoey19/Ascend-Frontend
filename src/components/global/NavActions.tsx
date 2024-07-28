import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const NavActions = () => {
  const isLogin = true;
  return (
    <>
      {isLogin ? (
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
