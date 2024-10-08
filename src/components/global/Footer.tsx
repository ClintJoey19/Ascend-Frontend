import { footerLinks } from "@/constants";
import Logo from "./Logo";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SendHorizontal } from "lucide-react";

const Footer = () => {
  return (
    <section className="mt-8 bg-white w-full">
      <footer className="container">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <Logo />
              <p className="text-sm">Your number 1 real state agency.</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {footerLinks.map(({ header, links }) => (
                <div key={header} className="flex flex-col gap-4">
                  <p className="text-xl font-medium">{header}</p>
                  <ul className="flex flex-col gap-4">
                    {links.map(({ label, href }) => (
                      <li key={label} className="text-muted-foreground">
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <p className="text-xl font-medium">Newsletter</p>
              <p className="text-sm">
                Suscribe to our Newsletter to received weekly update.
              </p>
              <div className="flex gap-2">
                <div className="">
                  <Input type="email" placeholder="Your Email" />
                </div>
                <Button size="icon">
                  <SendHorizontal className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-4 text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Ascend Real Estate | All rights
          reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
