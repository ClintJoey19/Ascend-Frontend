import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "react-router-dom";
import SearchRentForm from "./SearchRentForm";
import SearchBuyForm from "./SearchBuyForm";
import { useState } from "react";

export type Tab = "buy" | "rent";

export type ClassType = "A" | "B" | "C";

export type PropertyParams = {
  tab?: Tab;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  property?: string;
  class?: ClassType;
};

const SearchFilterForm = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  const location = searchParams.get("location");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const property = searchParams.get("property");
  const classType = searchParams.get("class");

  return (
    <section className="card-container">
      <Tabs defaultValue={tab || "buy"} className="w-full">
        <TabsList>
          <TabsTrigger value="buy">Buy</TabsTrigger>
          <TabsTrigger value="rent">Rent</TabsTrigger>
        </TabsList>
        <TabsContent value="buy">
          <SearchBuyForm />
        </TabsContent>
        <TabsContent value="rent">
          <SearchRentForm />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default SearchFilterForm;
