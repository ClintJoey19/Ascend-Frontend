import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthLayout from "@/layouts/AuthLayout";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-xl font-semibold">Login</h2>
        <p className="">Welcome to Ascend</p>
      </div>
      <form className="w-full flex items-center flex-col gap-4">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <div className="w-full flex flex-col">
          <Button type="submit">Login</Button>
        </div>
      </form>
      <div className="text-center">
        Don't have an account?{" "}
        <Link
          to="/auth/sign-up"
          className="underline hover:text-primary transition-colors"
        >
          Register here
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Login;
