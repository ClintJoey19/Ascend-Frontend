import { Property } from "../home/FeatureProperties";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import PropertyItem from "./PropertyItem";

type PropertySliderProps = {
  properties: Property[];
};

const PropertySlider = ({ properties }: PropertySliderProps) => {
  return (
    <ScrollArea className="w-full">
      <div className="flex w-max gap-4">
        {properties.map((property) => (
          <PropertyItem key={property.id} property={property} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default PropertySlider;
