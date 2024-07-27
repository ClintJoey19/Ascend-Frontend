import { properties } from "@/constants";
import PropertyGridItem from "./PropertyGridItem";
import { ClassType, PropertyType, Tab } from "./SearchFilterForm";

export type Property = {
  id: string;
  name: string;
  description: string;
  address: string;
  type: Tab;
  propertyType: PropertyType;
  classType: ClassType;
  price: number;
};

const PropertiesGrid = () => {
  return (
    <section className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {properties.map((property) => (
        <PropertyGridItem key={property.id} property={property} />
      ))}
    </section>
  );
};

export default PropertiesGrid;
