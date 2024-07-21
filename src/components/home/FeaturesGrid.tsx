import {
  ArrowDownUp,
  BadgeCheck,
  CreditCard,
  LucideIcon,
  MapPinned,
} from "lucide-react";
import FeatureGridItem from "./FeatureGridItem";

export type Feature = {
  id: number;
  headText: string;
  description: string;
  Icon?: LucideIcon;
};

const features: Feature[] = [
  {
    id: 1,
    headText: "We Give Best Choice Property For You",
    description:
      "A real state agency typically consists a team of professionals who work together to provide a range of services related.",
  },
  {
    id: 2,
    headText: "Find the Best Property",
    description:
      "A real state agency typically consists a team of professionals who work together.",
    Icon: MapPinned,
  },
  {
    id: 3,
    headText: "Easy Payment Method",
    description:
      "A real state agency typically consists a team of professionals who work together.",
    Icon: CreditCard,
  },
  {
    id: 4,
    headText: "Real Time Transactions",
    description:
      "A real state agency typically consists a team of professionals who work together.",
    Icon: ArrowDownUp,
  },
  {
    id: 5,
    headText: "Get Property Insurance",
    description:
      "A real state agency typically consists a team of professionals who work together.",
    Icon: BadgeCheck,
  },
];

const FeaturesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature) => (
        <FeatureGridItem feature={feature} />
      ))}
    </div>
  );
};

export default FeaturesGrid;
