import Logo2 from "@/assets/logo-2.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={Logo2} alt="Ascend" className="h-8 w-8" />
      <h2 className="text-primary text-2xl font-bold">Ascend</h2>
    </div>
  );
};

export default Logo;
