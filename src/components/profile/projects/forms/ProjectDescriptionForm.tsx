import { Button } from "@/components/ui/button";
import { Pencil, X } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  description: z
    .string()
    .min(1, { message: "Project Description field is required" }),
});

type ProjectDescriptionFormProps = {
  description?: string;
};

const ProjectDescriptionForm = ({
  description,
}: ProjectDescriptionFormProps) => {
  const [isEditting, setIsEditting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: description,
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
        <span className="text-muted-foreground text-sm">
          Project Description
        </span>
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
        <p className="my-2 text-sm py-2 px-3 border border-slate-300 rounded-lg">
          {description || "Blank Description"}
        </p>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col"
          >
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <Textarea
                      placeholder="e.g This apartment is..."
                      {...field}
                      autoFocus
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-end">
              <Button size="sm">Save</Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ProjectDescriptionForm;
