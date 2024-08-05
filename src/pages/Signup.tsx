import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthLayout from "@/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { LoaderCircle } from "lucide-react";
import toast from "react-hot-toast";
import apiRequest from "@/lib/apiRequest";
import { AxiosError } from "axios";

const formSchema = z.object({
  firstname: z.string().min(1, "First Name field is required"),
  lastname: z.string().min(1, "Last Name field is required"),
  email: z.string().min(1, "Email field is required"),
  password: z.string().min(1, "Password field is required"),
});

const Signup = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      const { firstname, lastname, email, password } = values;

      const res = await apiRequest.post("/auth/register", {
        firstname,
        lastname,
        email,
        password,
      });

      if (!res) throw new Error("There was en error in signing up");

      toast.success(res.data.message);
      navigate("/auth/login");
    } catch (error: any) {
      console.error(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-xl font-semibold">Sign Up</h2>
        <p className="">Welcome to Ascend</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="First Name"
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
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Last Name"
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
                "Register"
              ) : (
                <LoaderCircle className="h-5 w-5 animate-spin" />
              )}
            </Button>
          </div>
        </form>
      </Form>
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
