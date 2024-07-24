import FAQs from "@/components/home/FAQs";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import RecentProperties from "@/components/home/RecentProperties";
import Testimonials from "@/components/home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <RecentProperties />
      <Testimonials />
      <FAQs />
    </>
  );
};

export default Home;
