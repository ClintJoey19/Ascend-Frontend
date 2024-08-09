import ProfileLayout from "@/layouts/ProfileLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoaderCircle, User } from "lucide-react";
import { useAuthHook } from "@/providers/AuthProvider";

const formSchema = z.object({
  firstname: z.string().min(1, "First Name field is required"),
  lastname: z.string().min(1, "Last Name field is required"),
  email: z.string().min(1, "Email field is required"),
});

const EditProfile = () => {
  const { user, isSubmitting, updateUser } = useAuthHook();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: user?.firstname || "",
      lastname: user?.lastname || "",
      email: user?.email || "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <ProfileLayout>
      <div className="mb-4">
        <h2 className="text-xl font-medium">Edit Profile</h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="flex items-center flex-col gap-4">
            <div className="aspect-square w-[150px] md:w-[200px] flex items-center justify-center border-4 border-primary rounded-full overflow-hidden">
              {user?.profileImg ? (
                <img
                  src={user?.profileImg}
                  alt={user?.firstname}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <User className="h-[90%] w-[90%] text-primary" />
              )}
            </div>
            <div className="text-center">
              <Input type="file" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
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
                  <FormLabel>Last Name</FormLabel>
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
                  <FormLabel>Email</FormLabel>
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
            <div className="w-full flex flex-col">
              <Button type="submit" disabled={isSubmitting}>
                {!isSubmitting ? (
                  "Update"
                ) : (
                  <LoaderCircle className="h-5 w-5 animate-spin" />
                )}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </ProfileLayout>
  );
};

export default EditProfile;
