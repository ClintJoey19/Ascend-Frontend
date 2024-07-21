import PropertySlider from "../global/PropertySlider";
import SectionHeader from "../global/SectionHeader";
import { properties } from "./FeatureProperties";

const RecentProperties = () => {
  return (
    <section className="container flex flex-col gap-16">
      <SectionHeader
        title="Our Recent Completed Projects"
        description="A real state agency typically consists a team of professionals who work
        together to provide a range of services."
      />
      <div>
        <PropertySlider properties={properties} />
      </div>
    </section>
  );
};

export default RecentProperties;
