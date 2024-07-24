import Avatar from "../global/Avatar";

type TestimonialProps = {
  name: string;
  role: string;
  profileImg: string;
  comment: string;
};

const Testimonial = ({ name, role, profileImg, comment }: TestimonialProps) => {
  return (
    <div className="h-[250px] md:h-[300px] w-[400px] md:w-[500px] flex flex-col justify-between bg-white rounded-xl p-8">
      <div className="max-h-[200px]">
        <p className="w-full text-2xl md:text-3xl">{comment}</p>
      </div>
      <div className="flex gap-4">
        <Avatar img={profileImg} alt={name} size="large" />
        <div className="flex flex-col">
          <p>{name}</p>
          <span className="text-sm text-muted-foreground">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
