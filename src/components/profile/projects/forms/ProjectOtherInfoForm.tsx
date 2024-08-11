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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Project } from "@/pages/NewProject";
import apiRequest from "@/lib/apiRequest";
import toast from "react-hot-toast";

const formSchema = z.object({
  bedroom: z.coerce.number().min(1, { message: "Bedroom field is required" }),
  bathroom: z.coerce.number().min(1, { message: "Bathroom field is required" }),
  parking: z.string().min(1, { message: "Parking field is required" }),
  area: z.coerce.number().min(1, { message: "Area field is required" }),
  constructed: z.string(),
});

type ProjectOtherInfoFormProps = {
  project: Project | null;
  setProject: React.Dispatch<React.SetStateAction<Project | null>>;
};

const ProjectOtherInfoForm = ({
  project,
  setProject,
}: ProjectOtherInfoFormProps) => {
  const [isEditting, setIsEditting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bedroom: project?.bedroom || 0,
      bathroom: project?.bathroom || 0,
      parking: project?.parking || "",
      area: project?.area || 0,
      constructed: project?.constructed,
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
        ...values,
      });

      if (!res) throw new Error("Error updating project other information");

      setProject(res.data);
      toast.success("Other Information updated");
    } catch (error: any) {
      console.error(error.message);
      toast.error("Error updating project other information");
    } finally {
      setIsSubmitting(false);
      toggle();
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-muted-foreground text-sm">Other Information</span>
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
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <span className="text-muted-foreground text-sm">Bedroom</span>
            <p
              className={`my-2 text-sm py-2 px-3 border border-slate-300 ${
                !project?.bedroom && "text-slate-500"
              } rounded-full`}
            >
              {project?.bedroom || "Bedroom not set."}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground text-sm">Bathroom</span>
            <p
              className={`my-2 text-sm py-2 px-3 border border-slate-300 ${
                !project?.bathroom && "text-slate-500"
              } rounded-full`}
            >
              {project?.bathroom || "Bathroom not set."}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground text-sm">Parking</span>
            <p
              className={`my-2 text-sm py-2 px-3 border border-slate-300 ${
                !project?.parking && "text-slate-500"
              } rounded-full`}
            >
              {project?.parking || "Parking not set."}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground text-sm">Area</span>
            <p
              className={`my-2 text-sm py-2 px-3 border border-slate-300 ${
                !project?.area && "text-slate-500"
              } rounded-full`}
            >
              {project?.area || "Area not set."}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground text-sm">Constructed</span>
            <p
              className={`my-2 text-sm py-2 px-3 border border-slate-300 ${
                !project?.constructed && "text-slate-500"
              } rounded-full`}
            >
              {project?.constructed || "Constructed not set."}
            </p>
          </div>
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mb-2 grid grid-cols-2 gap-2"
          >
            <FormField
              control={form.control}
              name="bedroom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bedroom</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      disabled={isSubmitting}
                      autoFocus
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bathroom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bathroom</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      disabled={isSubmitting}
                      autoFocus
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="parking"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parking</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Parking" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Parking</SelectLabel>
                          <SelectItem value="Indoor">Indoor</SelectItem>
                          <SelectItem value="Outdoor">Outdoor</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="area"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Area</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      disabled={isSubmitting}
                      autoFocus
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="constructed"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Constructed</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} disabled={isSubmitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col justify-end">
              <Button type="submit" size="sm" disabled={isSubmitting}>
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

export default ProjectOtherInfoForm;
