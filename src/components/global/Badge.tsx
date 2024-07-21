type BadgeProps = {
  className?: string;
  children: React.ReactNode;
};

const Badge = ({ className, children }: BadgeProps) => {
  return (
    <span
      className={`${className} w-fit py-1 px-3 text-sm font-semibold border border-primary text-primary bg-white rounded-full`}
    >
      {children}
    </span>
  );
};

export default Badge;
