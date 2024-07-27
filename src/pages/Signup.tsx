import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthLayout from "@/layouts/AuthLayout";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-xl font-semibold">Sign Up</h2>
        <p className="">Welcome to Ascend</p>
      </div>
      <form className="w-full flex items-center flex-col gap-4">
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <div className="w-full flex flex-col">
          <Button type="submit">Register</Button>
        </div>
      </form>
      <div className="text-center">
        Have an account?{" "}
        <Link
          to="/auth/login"
          className="underline hover:text-primary transition-colors"
        >
          Login here
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Signup;
