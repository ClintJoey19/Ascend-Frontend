import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { LoaderCircle } from "lucide-react";
import { useAuthHook } from "@/providers/AuthProvider";

const formSchema = z.object({
  email: z.string().min(1, { message: "Invalid email" }),
  password: z.string().min(1, { message: "Invalid password" }),
});

const Login = () => {
  const { user, isSubmitting, login } = useAuthHook();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { email, password } = values;

    login(email, password);
    // try {
    //   setIsSubmitting(true);

    //   const res = await apiRequest.post("/auth/login", {
    //     email,
    //     password,
    //   });

    //   if (!res) throw new Error("Invalid Credentials");

    //   localStorage.setItem("user", JSON.stringify(res.data));
    //   toast.success("Login Successful");
    //   navigate("/");
    // } catch (error: any) {
    //   console.error(error.response.data.message);
    //   toast.error(error.response.data.message);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };
  return (
    <>
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-xl font-semibold">Login</h2>
        <p className="">Welcome to Ascend</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex flex-col">
            <Button type="submit" disabled={isSubmitting}>
              {!isSubmitting ? (
                "Login"
              ) : (
                <LoaderCircle className="w-5 h-5 animate-spin" />
              )}
            </Button>
          </div>
        </form>
      </Form>
      <div className="text-center">
        Don't have an account?{" "}
        <Link
          to="/auth/sign-up"
          className="underline hover:text-primary transition-colors"
        >
          Register here
        </Link>
      </div>
    </>
  );
};

export default Login;
