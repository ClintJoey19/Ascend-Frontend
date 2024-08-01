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
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  price: z.coerce
    .number()
    .min(1, { message: "Project Price field must be field" }),
});

type ProjectPriceFormProps = {
  price?: number;
};

const ProjectPriceForm = ({ price }: ProjectPriceFormProps) => {
  const [isEditting, setIsEditting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      price: price || 0,
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
        <p className="my-2 text-sm py-2 px-3 border border-slate-300 rounded-full">
          {price?.toLocaleString() || 0}
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
