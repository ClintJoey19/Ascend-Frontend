import { Button } from "@/components/ui/button";
import { Pencil, X } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(1, { message: "Project Name field is required" }),
});

type ProjectNameFormProps = {
  name: string;
};

const ProjectNameForm = ({ name }: ProjectNameFormProps) => {
  const [isEditting, setIsEditting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name,
    },
  });

  const toggle = () => {
    setIsEditting(!isEditting);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-muted-foreground text-sm">Project Name</span>
        {isEditting ? (
          <>
            <Button size="iconSm" onClick={toggle}>
              <X className="h-3 w-3" />
            </Button>
          </>
        ) : (
          <>
            <Button variant="outline" size="iconSm" onClick={toggle}>
              <Pencil className="h-3 w-3" />
            </Button>
          </>
        )}
      </div>
      {!isEditting ? (
        <p className="my-2 text-sm py-2 px-3 border border-slate-300 rounded-full">
          {name}
        </p>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mb-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <Input
                      placeholder="e.g Metro Appartment"
                      {...field}
                      autoFocus
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      )}
    </div>
  );
};

export default ProjectNameForm;
