import PropertyBilling from "@/components/projects/project/PropertyBilling";
import PropertyFeatures from "@/components/projects/project/PropertyFeatures";
import PropertyGridImage from "@/components/projects/project/PropertyGridImage";
import PropertyHeader from "@/components/projects/project/PropertyHeader";
import PropertyLocation from "@/components/projects/project/PropertyLocation";
import { properties } from "@/constants";
import HomeLayout from "@/layouts/HomeLayout";
import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();
  const {
    name,
    description,
    images,
    otherInfo,
    features,
    address,
    price,
    classType,
    type,
    propertyType,
  } = properties[Number(id) - 1];

  return (
    <HomeLayout>
      <section className="container p-2 md:p-4 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-4">
        <div className="p-4 flex flex-col gap-4 bg-white rounded-2xl overflow-hidden">
          <PropertyGridImage images={images} />
          <PropertyHeader
            name={name}
            description={description}
            otherInfo={otherInfo}
            address={address}
          />
          <PropertyLocation />
          <PropertyFeatures features={features} />
        </div>
        <div className="">
          <PropertyBilling price={price} type={type} />
        </div>
      </section>
    </HomeLayout>
  );
};

export default Project;
