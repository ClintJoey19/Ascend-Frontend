import CallToAction from "@/components/home/CallToAction";
import Banner from "@/components/projects/Banner";
import HomeLayout from "@/layouts/HomeLayout";

const About = () => {
  return (
    <HomeLayout>
      <div className="mt-8 flex flex-col gap-8 p-4">
        <Banner banner="About Us" header="Make Work Inspiring And Fulfilling" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
      <CallToAction />
    </HomeLayout>
  );
};

export default About;
