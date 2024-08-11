import { Button } from "@/components/ui/button";
import { LoaderCircle, Pencil, X } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Project } from "@/pages/NewProject";
import apiRequest from "@/lib/apiRequest";
import toast from "react-hot-toast";

const formSchema = z.object({
  type: z.string().min(1, { message: "Project Category field is required" }),
});

type ProjectCategoryFormProps = {
  project: Project | null;
  setProject: React.Dispatch<React.SetStateAction<Project | null>>;
};

const ProjectCategoryForm = ({
  project,
  setProject,
}: ProjectCategoryFormProps) => {
  const [isEditting, setIsEditting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: project?.type || "",
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
        type: values.type,
      });

      if (!res) throw new Error("Error updating project category");

      setProject(res.data);
      toast.success("Project category updated");
    } catch (error: any) {
      console.error(error.message);
      toast.error("Error updating project category");
    } finally {
      setIsSubmitting(false);
      toggle();
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-muted-foreground text-sm">Project Category</span>
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
            !project?.type && "text-slate-500"
          } rounded-full`}
        >
          {project?.type || "Category not set"}
        </p>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Buy">Buy</SelectItem>
                          <SelectItem value="Rent">Rent</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-end">
              <Button type="submit" size="sm">
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

export default ProjectCategoryForm;
