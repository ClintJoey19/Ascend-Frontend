import Logo from "./Logo";
import NavActions from "./NavActions";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <section className="h-[8vh] bg-white w-full flex items-center justify-between px-2 md:px-4 fixed top-0 left-0 right-0 z-50">
      <header className="h-full flex items-center gap-12">
        <Logo />
        <nav className="hidden md:block h-full">
          <Navlinks />
        </nav>
      </header>
      <div className="flex items-center gap-4">
        <NavActions />
      </div>
    </section>
  );
};

export default Navbar;
