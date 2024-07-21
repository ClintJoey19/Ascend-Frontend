import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MapPin, PhilippinePeso, Search } from "lucide-react";

const formSchema = z.object({
  location: z.string().min(1, { message: "Location must be field out" }),
  minPrice: z.coerce.number(),
  maxPrice: z.coerce.number(),
});

const SearchEstate = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      minPrice: 0,
      maxPrice: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="w-full py-4 px-2 md:px-4">
      <Card>
        <CardDescription></CardDescription>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full flex flex-col md:flex-row items-center gap-4"
            >
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <MapPin className="w-4 h-4 text-primary inline-block" />{" "}
                        Location
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Location" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="minPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <PhilippinePeso className="w-4 h-4 text-primary inline-block mr-1" />
                        Min Price
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Min Price"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="maxPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <PhilippinePeso className="w-4 h-4 text-primary inline-block mr-1" />
                        Max Price
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Max Price"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="md:hidden flex items-center gap-2"
                >
                  Search <Search className="h-5 w-5" />
                </Button>

                <Button type="submit" size="icon" className="max-md:hidden">
                  <Search />
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchEstate;
