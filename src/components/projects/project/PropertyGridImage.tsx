type PropertyGridImageProps = {
  images: string[];
};

const PropertyGridImage = ({ images }: PropertyGridImageProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, i) => (
        <img
          key={i}
          src={image}
          alt="property-image"
          className={`rounded-xl ${
            i === 0 &&
            "h-full w-full object-cover object-center col-span-2 row-span-2"
          }`}
        />
      ))}
    </div>
  );
};

export default PropertyGridImage;
