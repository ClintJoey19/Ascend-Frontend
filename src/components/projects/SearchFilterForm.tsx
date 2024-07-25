import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchPropertyForm from "./SearchPropertyForm";

const SearchFilterForm = () => {
  return (
    <section className="card-container">
      <Tabs defaultValue="buy" className="w-full">
        <TabsList>
          <TabsTrigger value="buy">Buy</TabsTrigger>
          <TabsTrigger value="rent">Rent</TabsTrigger>
        </TabsList>
        <TabsContent value="buy">
          <SearchPropertyForm />
        </TabsContent>
        <TabsContent value="rent">
          <SearchPropertyForm />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default SearchFilterForm;
