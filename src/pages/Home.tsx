import FAQs from "@/components/home/FAQs";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import RecentProperties from "@/components/home/RecentProperties";
import Testimonials from "@/components/home/Testimonials";
import HomeLayout from "@/layouts/HomeLayout";

const Home = () => {
  return (
    <HomeLayout>
      <Hero />
      <Features />
      <RecentProperties />
      <Testimonials />
      <FAQs />
    </HomeLayout>
  );
};

export default Home;
