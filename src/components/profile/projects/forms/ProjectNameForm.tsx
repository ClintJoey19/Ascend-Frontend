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
import { Project } from "@/pages/NewProject";
import toast from "react-hot-toast";
import apiRequest from "@/lib/apiRequest";

const formSchema = z.object({
  name: z.string().min(1, { message: "Project Name field is required" }),
});

type ProjectNameFormProps = {
  project: Project | null;
  setProject: React.Dispatch<React.SetStateAction<Project | null>>;
};

const ProjectNameForm = ({ project, setProject }: ProjectNameFormProps) => {
  const [isEditting, setIsEditting] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: project?.name || "",
    },
  });

  const toggle = () => {
    setIsEditting(!isEditting);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);

      const res = await apiRequest.put(`/agent-projects/${project?.id}`, {
        ...project,
        name: values.name,
      });

      if (!res) throw new Error("Error updating project name");

      setProject(res.data);
      toast.success("Project name updated");
    } catch (error: any) {
      console.error(error.message);
      toast.error("Error updating project name");
    } finally {
      setIsSubmitting(false);
      toggle();
    }
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
          {project?.name}
        </p>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mb-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="e.g Metro Appartment"
                      {...field}
                      disabled={isSubmitting}
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
