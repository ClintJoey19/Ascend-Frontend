import SectionHeader from "@/components/global/SectionHeader";
import CallToAction from "@/components/home/CallToAction";
import Banner from "@/components/projects/Banner";

const Contact = () => {
  return (
    <div className="mt-8 flex flex-col gap-8 p-4">
      <Banner banner="Contact Us" header="Get in Touch with Ascend" />
      <div className="flex flex-col gap-4">
        <div className="section-container">
          <SectionHeader
            title="Get in Touch with Ascend"
            description="We're here to assist you with all your real estate needs. Whether you're buying, selling, renting, or simply have a question, our team is ready to help."
          />
        </div>
        <div className="section-container">
          <SectionHeader title="Contact Form" />
        </div>
      </div>
      <CallToAction />
    </div>
  );
};

export default Contact;
