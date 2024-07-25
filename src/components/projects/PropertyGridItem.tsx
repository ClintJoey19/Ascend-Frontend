import Building1 from "@/assets/building-1.jpg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const PropertyGridItem = () => {
  return (
    <div className="bg-white rounded-xl flex flex-col shadow-sm">
      <div className="aspect-square w-full overflow-hidden rounded-tr-xl rounded-tl-xl">
        <img
          src={Building1}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="w-full flex gap-2">
          <div className="flex flex-col">
            <p className="text-md font-medium truncate">Hello World</p>
            <span className="text-sm text-muted-foreground">Naga City</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-xl font-medium">&#x20B1; 50,000,000.00</p>
          <Button size="sm" asChild>
            <Link to={`/projects/1`}>View</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyGridItem;
