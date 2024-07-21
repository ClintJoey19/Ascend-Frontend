import Building1 from "@/assets/building-1.jpg";

const TextImage = () => {
  return (
    <div className="hidden sm:inline-block h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:w-24 lg:h-24 rounded-full overflow-hidden bg-primary">
      <img
        src={Building1}
        alt="Building"
        className="h-[95%] w-[95%] rounded-full object-cover object-center"
      />
    </div>
  );
};

export default TextImage;
