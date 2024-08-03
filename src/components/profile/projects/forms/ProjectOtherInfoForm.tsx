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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  bedroom: z.coerce.number().min(1, { message: "Bedroom field is required" }),
  bathroom: z.coerce.number().min(1, { message: "Bathroom field is required" }),
  parking: z.string().min(1, { message: "Parking field is required" }),
  area: z.coerce.number().min(1, { message: "Area field is required" }),
  constructed: z.coerce
    .number()
    .min(1800, { message: "Invalid constructed year" }),
});

type Parking = "indoor" | "outdoor";

type ProjectOtherInfoFormProps = {
  bedroom?: number;
  bathroom?: number;
  parking?: Parking;
  area?: number;
  constructed?: number;
};

const ProjectOtherInfoForm = ({
  bedroom,
  bathroom,
  parking,
  area,
  constructed,
}: ProjectOtherInfoFormProps) => {
  const [isEditting, setIsEditting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bedroom: bedroom || 0,
      bathroom: bathroom || 0,
      parking: parking || "",
      area: area || 0,
      constructed: constructed || 0,
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
            <p className="my-2 text-sm py-2 px-3 border border-slate-300 rounded-full">
              {bedroom || "Bedroom not set."}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground text-sm">Bathroom</span>
            <p className="my-2 text-sm py-2 px-3 border border-slate-300 rounded-full">
              {bathroom || "Bathroom not set."}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground text-sm">Parking</span>
            <p className="my-2 text-sm py-2 px-3 border border-slate-300 rounded-full">
              {parking || "Parking not set."}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground text-sm">Area</span>
            <p className="my-2 text-sm py-2 px-3 border border-slate-300 rounded-full">
              {area || "Area not set."}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground text-sm">Constructed</span>
            <p className="my-2 text-sm py-2 px-3 border border-slate-300 rounded-full">
              {constructed || "Constructed not set."}
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
                    <Input type="number" {...field} autoFocus />
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
                    <Input type="number" {...field} autoFocus />
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
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a fruit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Parking</SelectLabel>
                          <SelectItem value="indoor">Indoor</SelectItem>
                          <SelectItem value="outdoor">Outdoor</SelectItem>
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
                    <Input type="number" {...field} autoFocus />
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
                    <Input type="number" {...field} autoFocus />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col justify-end">
              <Button type="submit" size="sm">
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ProjectOtherInfoForm;
