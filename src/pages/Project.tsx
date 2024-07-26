import PropertyBilling from "@/components/projects/project/PropertyBilling";
import PropertyFeatures from "@/components/projects/project/PropertyFeatures";
import PropertyGridImage from "@/components/projects/project/PropertyGridImage";
import PropertyHeader from "@/components/projects/project/PropertyHeader";
import PropertyLocation from "@/components/projects/project/PropertyLocation";
import HomeLayout from "@/layouts/HomeLayout";
import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();

  return (
    <HomeLayout>
      <section className="container p-2 md:p-4 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-4">
        <div className="p-4 flex flex-col gap-4 bg-white rounded-2xl overflow-hidden">
          <PropertyGridImage />
          <PropertyHeader name="Hello World" address="Naga City" />
          <PropertyLocation />
          <PropertyFeatures />
        </div>
        <div className="">
          <PropertyBilling />
        </div>
      </section>
    </HomeLayout>
  );
};

export default Project;
