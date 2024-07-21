type SectionHeaderProps = {
  title: string;
  description?: string;
};

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <h2 className="section-title md:col-span-2">{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
};

export default SectionHeader;
