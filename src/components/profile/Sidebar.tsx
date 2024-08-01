import { agentLinks, profileLinks } from "@/constants";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  const isAgent = true;
  const links = isAgent ? agentLinks : profileLinks;

  return (
    <section className="hidden md:inline-block w-[200px] py-4">
      <nav className="">
        <ul className="flex flex-col gap-2">
          {links.map(({ label, href, Icon }) => {
            const isActive =
              (pathname.includes(href) && href.length > 8) || pathname === href;
            return (
              <>
                <li
                  key={label}
                  className={`pl-4 rounded-full p-2 ${
                    isActive && "bg-primary text-white"
                  }`}
                >
                  <Link to={href} className="flex items-center gap-2">
                    <Icon className="h-4 w-4" /> {label}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
