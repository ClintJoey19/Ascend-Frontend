import SectionHeader from "../global/SectionHeader";
import Building1 from "@/assets/building-1.jpg";
import Testimonial from "./Testimonial";
import { motion } from "framer-motion";
import { testimonials } from "@/constants";

const Testimonials = () => {
  return (
    <section className="section-container flex flex-col gap-16">
      <SectionHeader
        title="Recent Feedback From Our Clients"
        description="A real state agency typically consists a team of professionals who work
        together to provide a range of services."
      />
      <div className="w-full flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black,black,black,black,transparent)]">
        <motion.div
          className="flex gap-8 pr-8"
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {testimonials.map(({ id, name, role, profileImg, comment }) => (
            <Testimonial
              key={id}
              name={name}
              role={role}
              profileImg={profileImg}
              comment={comment}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
