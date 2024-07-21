import { Feature } from "./FeaturesGrid";

type FeatureGridItemProps = {
  feature: Feature;
};

const FeatureGridItem = ({ feature }: FeatureGridItemProps) => {
  const { headText, description, Icon } = feature;
  return (
    <div
      className={`${
        !Icon
          ? "sm:col-span-2"
          : "flex justify-center items-center flex-col gap-4 bg-white p-8 rounded-xl hover:border-primary hover:shadow-md transition"
      } border-2 border-transparent`}
    >
      {Icon && (
        <div className="h-[80px] w-[80px] flex items-center justify-center bg-primary rounded-full">
          <Icon className="h-10 w-10 text-white" />
        </div>
      )}
      <p
        className={`${
          !Icon ? "section-title mb-4" : " text-4xl text-center font-medium"
        }`}
      >
        {headText}
      </p>
      <p className={`${!Icon ? "section-description" : "text-center"}`}>
        {description}
      </p>
    </div>
  );
};

export default FeatureGridItem;
