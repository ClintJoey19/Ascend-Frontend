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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  category: z
    .string()
    .min(1, { message: "Project Category field is required" }),
});

type ProjectCategoryFormProps = {
  category?: string;
};

const ProjectCategoryForm = ({ category }: ProjectCategoryFormProps) => {
  const [isEditting, setIsEditting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category,
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
        <p className="my-2 text-sm py-2 px-3 border border-slate-300 rounded-full">
          {category || "Category"}
        </p>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mb-2">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="buy">Buy</SelectItem>
                          <SelectItem value="rent">Rent</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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

export default ProjectCategoryForm;
