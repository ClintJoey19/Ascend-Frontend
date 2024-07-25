import House1 from "@/assets/house-1.jpg";

type PropertyGridImageProps = {
  images: string[];
};

const PropertyGridImage = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <img
        src={House1}
        alt=""
        className="object-cover object-center rounded-xl col-span-2 row-span-2"
      />
      <img src={House1} alt="" className="rounded-xl" />
      <img src={House1} alt="" className="rounded-xl" />
    </div>
  );
};

export default PropertyGridImage;
