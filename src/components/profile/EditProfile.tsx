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
import { User } from "@/providers/AuthProvider";
import { LoaderCircle } from "lucide-react";
import ProfileAvatar from "../global/ProfileAvatar";
import { useState } from "react";
import UploadWidget from "../global/UploadWidget";

const formSchema = z.object({
  firstname: z.string().min(1, "First Name field is required"),
  lastname: z.string().min(1, "Last Name field is required"),
  email: z.string().min(1, "Email field is required"),
  profileImg: z.string().min(1, "Profile image is required"),
});

type EditProfileProps = {
  user: User | null;
  isSubmitting: boolean;
  updateUser: (user: User) => void;
};

const EditProfile = ({ user, isSubmitting, updateUser }: EditProfileProps) => {
  const [profile, setProfile] = useState<string>(user?.profileImg || "");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: user?.firstname || "",
      lastname: user?.lastname || "",
      email: user?.email || "",
      profileImg: profile,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (user) {
      const updatedUser = {
        ...user,
        ...values,
      };
      updateUser(updatedUser);
    }
  };

  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <FormField
              control={form.control}
              name="profileImg"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center gap-4">
                  <ProfileAvatar profileImg={field.value} role={user?.role} />
                  <UploadWidget
                    uwConfig={{
                      cloudName: "clintjoey",
                      uploadPreset: "ascend",
                      maxImageFileSize: 2000000,
                      multiple: false,
                      folder: "profiles",
                    }}
                    setPublicId={setProfile}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <div className="text-end">
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
    </div>
  );
};

export default EditProfile;
