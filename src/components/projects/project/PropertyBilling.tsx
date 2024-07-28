import Avatar from "@/components/global/Avatar";
import Building1 from "@/assets/building-1.jpg";
import { Button } from "@/components/ui/button";
import { Tab } from "../SearchFilterForm";

type PropertyBillingProps = {
  price: number;
  type: Tab;
  agentId?: string;
};

const PropertyBilling = ({ price, type, agentId }: PropertyBillingProps) => {
  return (
    <div className="flex flex-col gap-4 bg-white p-4 rounded-xl">
      <h2 className="text-lg font-medium">Billing Information</h2>
      <div className="flex flex-col">
        <span className="text-sm text-start text-muted-foreground">
          {type === "buy" ? "Property Price" : "Monthly Rent"}
        </span>
        <p className="text-end text-2xl font-semibold">
          &#x20B1; {price.toLocaleString()}
        </p>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-start text-muted-foreground">
            Agent
          </span>
          <div className="flex justify-end">
            <div className="flex flex-col items-center gap-2">
              <Avatar img={Building1} size="large" />
              <span className="text-sm text-start text-muted-foreground">
                Chris
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end lg:flex-col gap-4">
        <Button>Request a Tour</Button>
        <Button variant="outline">Contact Agent</Button>
      </div>
    </div>
  );
};

export default PropertyBilling;
