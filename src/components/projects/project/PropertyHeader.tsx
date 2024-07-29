import { Bath, Bed, CarFront, Hammer, LandPlot } from "lucide-react";
import { PropertyOtherInfo } from "../PropertiesGrid";

type PropertyHeaderProps = {
  name: string;
  description: string;
  address: string;
  otherInfo: PropertyOtherInfo;
};

const PropertyHeader = ({
  name,
  description,
  otherInfo,
  address,
}: PropertyHeaderProps) => {
  return (
    <>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col">
          <p className="text-2xl font-medium truncate">{name}</p>
          <span className="text-muted-foreground truncate">{address}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 rounded-xl border border-slate-400">
        <div className="gap-2 border-r border-slate-400 p-4">
          <p className="text-muted-foreground text-sm mb-1">Bedroom</p>
          <div className="flex items-center gap-2">
            <Bed className="h-5 w-5 text-primary" />
            <span className="font-medium">{otherInfo.bedroom}</span>
          </div>
        </div>
        <div className="gap-2 border-r border-transparent sm:border-slate-400 p-4">
          <p className="text-muted-foreground text-sm mb-1">Bathroom</p>
          <div className="flex items-center gap-2">
            <Bath className="h-5 w-5 text-primary" />
            <span className="font-medium">{otherInfo.bathroom}</span>
          </div>
        </div>
        <div className="gap-2 border-r border-slate-400 sm:border-transparent md:border-slate-400 p-4">
          <p className="text-muted-foreground text-sm mb-1">Parking</p>
          <div className="flex items-center gap-2">
            <CarFront className="h-5 w-5 text-primary" />
            <span className="font-medium">{otherInfo.parking}</span>
          </div>
        </div>
        <div className="gap-2 border-r border-transparent sm:border-slate-400 p-4">
          <p className="text-muted-foreground text-sm mb-1">Area</p>
          <div className="flex items-center gap-2">
            <LandPlot className="h-5 w-5 text-primary" />
            <span className="font-medium">
              {otherInfo.area.toLocaleString()} ft
            </span>
          </div>
        </div>
        <div className="gap-2 max-md:border-r border-slate-400 p-4">
          <p className="text-muted-foreground text-sm mb-1">Constructed</p>
          <div className="flex items-center gap-2">
            <Hammer className="h-5 w-5 text-primary" />
            <span className="font-medium">{otherInfo.constructed}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-medium">Description</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </>
  );
};

export default PropertyHeader;
