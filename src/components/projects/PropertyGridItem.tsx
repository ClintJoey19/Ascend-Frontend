import Building1 from "@/assets/building-1.jpg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Property } from "./PropertiesGrid";

type PropertyGridItemProps = {
  property: Property;
};

const PropertyGridItem = ({ property }: PropertyGridItemProps) => {
  return (
    <div className="bg-white rounded-xl flex flex-col shadow-sm">
      <div className="aspect-square w-full overflow-hidden rounded-tr-xl rounded-tl-xl relative">
        <img
          src={Building1}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <span className="absolute top-2 right-2 bg-white py-1 px-2 rounded-full text-sm capitalize">
          {property.type}
        </span>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="w-full flex gap-2">
          <div className="flex flex-col">
            <p className="text-md font-medium truncate">{property.name}</p>
            <span className="text-sm text-muted-foreground">
              {property.address}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-xl font-medium">
            &#x20B1; {property.price.toLocaleString()}
          </p>
          <Button size="sm" asChild>
            <Link to={`/projects/1`}>View</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyGridItem;
