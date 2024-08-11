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
import apiRequest from "@/lib/apiRequest";
import toast from "react-hot-toast";
import { Project } from "@/pages/NewProject";

const formSchema = z.object({
  price: z.coerce
    .number()
    .min(1, { message: "Project Price field must be field" }),
});

type ProjectPriceFormProps = {
  project: Project | null;
  setProject: React.Dispatch<React.SetStateAction<Project | null>>;
};

const ProjectPriceForm = ({ project, setProject }: ProjectPriceFormProps) => {
  const [isEditting, setIsEditting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      price: project?.price || 0,
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
        price: values.price,
      });

      if (!res) throw new Error("Error updating project price");

      setProject(res.data);
      toast.success("Project price updated");
    } catch (error: any) {
      console.error(error.message);
      toast.error("Error updating project price");
    } finally {
      setIsSubmitting(false);
      toggle();
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-muted-foreground text-sm">Project Price</span>
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
            !project?.price && "text-slate-500"
          } rounded-full`}
        >
          {project?.price?.toLocaleString() || 0}
        </p>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mb-2">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g 1,000,000.00"
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

export default ProjectPriceForm;
