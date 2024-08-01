type SectionHeaderProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

const SectionHeader = ({
  title,
  description,
  children,
}: SectionHeaderProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex flex-col gap-4 md:gap-8 md:col-span-2">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
      <p className="section-description text-justify">{description}</p>
    </div>
  );
};

export default SectionHeader;
