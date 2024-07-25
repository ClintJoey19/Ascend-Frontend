import PropertyFeatures from "@/components/projects/project/PropertyFeatures";
import PropertyGridImage from "@/components/projects/project/PropertyGridImage";
import PropertyHeader from "@/components/projects/project/PropertyHeader";
import PropertyLocation from "@/components/projects/project/PropertyLocation";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();

  return (
    <section className="container pb-4 pt-8 grid grid-cols-[1fr_350px] gap-4">
      <div className="p-4 flex flex-col gap-4 bg-white rounded-2xl overflow-hidden">
        <PropertyGridImage />
        <PropertyHeader name="Hello World" address="Naga City" />
        <PropertyLocation />
        <PropertyFeatures />
      </div>
      <div className="">
        <div className="flex flex-col gap-4 bg-white p-4 rounded-xl">
          <h2 className="text-lg font-medium">Billing Information</h2>
          <div className="flex flex-col">
            <span className="text-sm text-start text-muted-foreground">
              Full Payment
            </span>
            <p className="text-end text-2xl font-semibold">
              &#x20B1; 50,000,000.00
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Button>Request a Tour</Button>
            <Button variant="outline">Contact Agent</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
