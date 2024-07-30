import CallToAction from "@/components/home/CallToAction";
import Banner from "@/components/projects/Banner";
import HomeLayout from "@/layouts/HomeLayout";

const Contact = () => {
  return (
    <HomeLayout>
      <div className="mt-8 flex flex-col gap-8 p-4">
        <Banner banner="Contact Us" header="Get in Touch with Ascend" />
        <CallToAction />
      </div>
    </HomeLayout>
  );
};

export default Contact;
