import Logo2 from "@/assets/logo-2.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src={Logo2} alt="Ascend" className="h-8 w-8" />
      <h2 className="text-primary text-2xl font-bold">Ascend</h2>
    </Link>
  );
};

export default Logo;
