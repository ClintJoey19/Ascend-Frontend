import { Link } from "react-router-dom";

const links = [
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "About",
    href: "/about-us",
  },
  {
    label: "Contact",
    href: "/contact-us",
  },
];

const Navlinks = () => {
  return (
    <ul className="h-full flex items-center gap-8">
      {links.map(({ label, href }) => (
        <li key={label}>
          <Link to={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navlinks;
