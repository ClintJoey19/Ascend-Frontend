import PropertySlider from "../global/PropertySlider";
import Property1 from "@/assets/property-1.jpg";
import Property2 from "@/assets/property-2.jpg";
import Property3 from "@/assets/property-3.jpg";
import Property4 from "@/assets/property-4.jpg";

export type Property = {
  id: string;
  name: string;
  image: string;
  address: string;
};

export const properties: Property[] = [
  {
    id: "1",
    name: "Hello World",
    image: Property1,
    address: "Naga City, Camarines Sur",
  },
  {
    id: "2",
    name: "Hello World",
    image: Property2,
    address: "Naga City, Camarines Sur",
  },
  {
    id: "3",
    name: "Hello Worldhahahahahahahhahahah",
    image: Property3,
    address: "Naga City, Camarines Surheheheheh",
  },
  {
    id: "4",
    name: "Hello World",
    image: Property4,
    address: "Naga City, Camarines Sur",
  },
];

const FeatureProperties = () => {
  return <PropertySlider properties={properties} />;
};

export default FeatureProperties;
