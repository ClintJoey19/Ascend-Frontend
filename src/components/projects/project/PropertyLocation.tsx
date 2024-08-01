import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import Map from "@/components/global/Map";

const PropertyLocation = () => {
  const position: LatLngExpression = [51.505, -0.1];
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-medium">Property Location</h2>
      <div className="w-full aspect-video rounded-xl">
        <Map position={position} />
      </div>
    </div>
  );
};

export default PropertyLocation;
