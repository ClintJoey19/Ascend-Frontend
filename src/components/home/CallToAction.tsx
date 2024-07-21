import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const CallToAction = () => {
  return (
    <div className="w-full bg-primary flex flex-col gap-8 items-center justify-center rounded-2xl p-8 mt-8">
      <h2 className="text-4xl md:text-6xl text-center text-white">
        Suscribe Our Notification, News & Blogs
      </h2>
      <p className="text-slate-300 md:text-xl text-center">
        A real state agency typically consists a team of professionals who work
        together to provide a range of services.
      </p>
      <Button variant="ghost">
        Register <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );
};

export default CallToAction;
