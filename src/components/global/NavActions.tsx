import { Button } from "../ui/button";

const NavActions = () => {
  return (
    <>
      <Button>Login</Button>
      <Button variant="outline" className="hidden md:block">
        Sign Up
      </Button>
    </>
  );
};

export default NavActions;
