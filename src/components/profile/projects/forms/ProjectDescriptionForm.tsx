import { Button } from "@/components/ui/button";
import { LoaderCircle, Pencil, X } from "lucide-react";
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
import { Project } from "@/pages/NewProject";
import apiRequest from "@/lib/apiRequest";
import toast from "react-hot-toast";

const formSchema = z.object({
  description: z
    .string()
    .min(1, { message: "Project Description field is required" }),
});

type ProjectDescriptionFormProps = {
  project: Project | null;
  setProject: React.Dispatch<React.SetStateAction<Project | null>>;
};

const ProjectDescriptionForm = ({
  project,
  setProject,
}: ProjectDescriptionFormProps) => {
  const [isEditting, setIsEditting] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: project?.description,
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
        description: values.description,
      });

      if (!res) throw new Error("Error updating project description");

      setProject(res.data);
      toast.success("Project description updated");
    } catch (error: any) {
      console.error(error.message);
      toast.error("Error updating project description");
    } finally {
      setIsSubmitting(false);
      toggle();
    }
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
        <p
          className={`my-2 text-sm py-2 px-3 border border-slate-300 ${
            !project?.description && "text-slate-500"
          } rounded-lg`}
        >
          {project?.description || "Description not set"}
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
                      disabled={isSubmitting}
                      autoFocus
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-end">
              <Button size="sm" disabled={isSubmitting}>
                {isSubmitting ? (
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                ) : (
                  "Save"
                )}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ProjectDescriptionForm;
