const PropertyFeatures = ({ features }: { features: string[] }) => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-medium">Property Features</h2>
      <div className="px-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <li key={i} className="list-disc">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PropertyFeatures;
