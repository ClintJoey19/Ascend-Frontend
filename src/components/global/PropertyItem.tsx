import { MapPin } from "lucide-react";
import { Property } from "../home/FeatureProperties";

type PropertyItemProps = {
  property: Property;
};

const PropertyItem = ({ property }: PropertyItemProps) => {
  const { id, name, image, address } = property;
  return (
    <div className="h-[500px] w-[350px] relative rounded-xl overflow-hidden">
      <img src={image} alt={name} className="object-contain" />
      <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-md">
        <p className="font-medium truncate">{name}</p>
        <p className="text-slate-500 truncate">
          <MapPin className="mr-1 h-5 w-5 text-primary inline-block" />
          {address}
        </p>
      </div>
    </div>
  );
};

export default PropertyItem;
