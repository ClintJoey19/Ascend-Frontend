import Badge from "../global/Badge";
import TextImage from "../global/TextImage";
import { Button } from "../ui/button";
import FeatureProperties from "./FeatureProperties";
import SearchEstate from "./SearchEstate";

const Hero = () => {
  return (
    <section className="container pt-[8vh] flex flex-col gap-4 md:pb-20">
      <div className="w-full flex flex-col md:flex-row gap-4 relative">
        <div className="h-full w-full md:w-[90%] flex items-center pt-16">
          <div className="flex flex-col gap-2 md:gap-4">
            <Badge>No. 1 Agency Of The Year</Badge>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-medium">
              Discover <TextImage /> Top Real Estate in{" "}
              <span className="text-primary font-semibold">Best Price</span>
            </h1>
            <p className="w-full md:max-w-[600px] lg:max-w-[700px] section-description">
              A real state agency typically consists a team of professionals who
              work together to provide a range of services related to buy &
              sell.
            </p>
          </div>
        </div>
        <div>
          <Button className="block md:hidden">Get Started</Button>
          <Button
            variant="cta"
            size="cta"
            className="text-xl md:text-2xl hidden md:block absolute bottom-0 right-0"
          >
            Get Started
          </Button>
        </div>
      </div>
      <div>
        <SearchEstate />
      </div>
      <div>
        <FeatureProperties />
      </div>
    </section>
  );
};

export default Hero;
