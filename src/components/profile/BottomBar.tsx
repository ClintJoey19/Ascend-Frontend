import { agentLinks, profileLinks } from "@/constants";
import { useAuthHook } from "@/providers/AuthProvider";
import { Link, useLocation } from "react-router-dom";

const BottomBar = () => {
  const { pathname } = useLocation();
  const { user } = useAuthHook();
  const links = user?.role === "agent" ? agentLinks : profileLinks;

  return (
    <section className="md:hidden bg-primary w-full p-4 fixed bottom-0 right-0 left-0 z-20">
      <nav>
        <ul className="flex justify-between gap-2">
          {links.map(({ label, href, Icon }) => {
            const isActive =
              (pathname.includes(href) && href.length > 8) || pathname === href;
            return (
              <li
                key={label}
                className={`sm:px-4 rounded-full p-2 ${
                  isActive ? "bg-white text-primary" : "text-white"
                }`}
              >
                <Link to={href} className="font-medium flex items-center gap-2">
                  <Icon className="h-4 w-4" />{" "}
                  <span className="hidden sm:inline-block">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default BottomBar;
