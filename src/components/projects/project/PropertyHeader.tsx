import { Bath, Bed, CarFront, Hammer, LandPlot } from "lucide-react";

type PropertyHeaderProps = {
  name: string;
  address: string;
};

const PropertyHeader = ({ name, address }: PropertyHeaderProps) => {
  return (
    <>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col">
          <p className="text-2xl font-medium truncate">{name}</p>
          <span className="text-muted-foreground truncate">{address}</span>
        </div>
      </div>
      <div className="grid grid-cols-5 rounded-xl border border-slate-400">
        <div className="gap-2 border-r border-slate-400 p-4">
          <p className="text-muted-foreground text-sm mb-1">Bedroom</p>
          <div className="flex items-center gap-2">
            <Bed className="h-5 w-5 text-primary" />
            <span className="font-medium">Four</span>
          </div>
        </div>
        <div className="gap-2 border-r border-slate-400 p-4">
          <p className="text-muted-foreground text-sm mb-1">Bathroom</p>
          <div className="flex items-center gap-2">
            <Bath className="h-5 w-5 text-primary" />
            <span className="font-medium">Two</span>
          </div>
        </div>
        <div className="gap-2 border-r border-slate-400 p-4">
          <p className="text-muted-foreground text-sm mb-1">Parking</p>
          <div className="flex items-center gap-2">
            <CarFront className="h-5 w-5 text-primary" />
            <span className="font-medium">Indoor</span>
          </div>
        </div>
        <div className="gap-2 border-r border-slate-400 p-4">
          <p className="text-muted-foreground text-sm mb-1">Area</p>
          <div className="flex items-center gap-2">
            <LandPlot className="h-5 w-5 text-primary" />
            <span className="font-medium">1,000 ft</span>
          </div>
        </div>
        <div className="gap-2 p-4">
          <p className="text-muted-foreground text-sm mb-1">Constructed</p>
          <div className="flex items-center gap-2">
            <Hammer className="h-5 w-5 text-primary" />
            <span className="font-medium">2000</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-medium">Description</h3>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id excepturi
          quibusdam recusandae, eveniet laboriosam a culpa architecto ducimus
          doloremque tenetur minus saepe in optio debitis corrupti perspiciatis
          ratione? Magni aut quidem necessitatibus consectetur molestiae laborum
          fugit ab minus repellat, provident perspiciatis ex expedita eligendi
          dolores corrupti animi? Incidunt magnam asperiores animi rerum eum
          beatae doloremque excepturi expedita fugit sed? Est fuga ab molestiae
          ullam totam in sed porro aperiam voluptatem modi, ad maxime
          exercitationem a eaque qui illo placeat repellendus.
        </p>
      </div>
    </>
  );
};

export default PropertyHeader;
