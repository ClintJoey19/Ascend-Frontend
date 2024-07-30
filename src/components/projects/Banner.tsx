type BannerProps = {
  banner: string;
  header: string;
};

const Banner = ({ banner, header }: BannerProps) => {
  return (
    <section className="py-8 flex flex-col gap-4 items-center justify-center">
      <span className="text-muted-foreground text-center">{banner}</span>
      <h2 className="text-4xl md:text-6xl font-medium text-center">{header}</h2>
    </section>
  );
};

export default Banner;
