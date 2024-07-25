import PropertyGridItem from "./PropertyGridItem";

export type Property = {
  name: string;
  description: string;
  address: string;
};

const PropertiesGrid = () => {
  return (
    <section className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <PropertyGridItem />
      <PropertyGridItem />
      <PropertyGridItem />
      <PropertyGridItem />
      <PropertyGridItem />
      <PropertyGridItem />
      <PropertyGridItem />
      <PropertyGridItem />
    </section>
  );
};

export default PropertiesGrid;
