import SectionHeader from "@/components/global/SectionHeader";
import CallToAction from "@/components/home/CallToAction";
import Banner from "@/components/projects/Banner";
import HomeLayout from "@/layouts/HomeLayout";

const About = () => {
  return (
    <>
      <div className="mt-8 flex flex-col gap-8 p-4">
        <Banner banner="About Us" header="Make Work Inspiring And Fulfilling" />
        <div className="flex flex-col gap-4">
          <div className="section-container">
            <SectionHeader
              title="Your Partner in Real Estate Success"
              description="At Ascend, we believe that finding your dream home or investment property should be a seamless and enjoyable experience. Our mission is to revolutionize the real estate industry by providing innovative solutions and exceptional service."
            />
          </div>
          <div className="section-container">
            <SectionHeader
              title="Our Vision"
              description="We envision a world where everyone has access to the perfect property and the support they need to achieve their real estate goals. Ascend is committed to being a leading platform that empowers individuals to make informed decisions and find their ideal space."
            />
          </div>
          <div className="section-container">
            <SectionHeader title="Our Values" />
          </div>
          <div className="section-container">
            <SectionHeader
              title="Your Partner in Real Estate Success"
              description="At Ascend, we believe that finding your dream home or investment property should be a seamless and enjoyable experience. Our mission is to revolutionize the real estate industry by providing innovative solutions and exceptional service."
            />
          </div>
        </div>
      </div>
      <CallToAction />
    </>
  );
};

export default About;
