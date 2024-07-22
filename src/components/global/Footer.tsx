import { footerLinks } from "@/constants";
import Logo from "./Logo";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send, SendHorizontal } from "lucide-react";

const Footer = () => {
  return (
    <section className="mt-8 bg-white w-full">
      <footer className="container">
        <div className="grid grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-sm">Your number 1 real state agency.</p>
          </div>
          <div className="col-span-2 grid grid-cols-3 gap-4">
            {footerLinks.map(({ header, links }) => (
              <div key={header} className="flex flex-col gap-4">
                <p className="text-xl font-medium">{header}</p>
                <ul className="flex flex-col gap-4">
                  {links.map(({ label, href }) => (
                    <li className="text-muted-foreground">{label}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-medium">Newsletter</p>
            <p className="text-sm">
              Suscribe to our Newsletter to received weekly update.
            </p>
            <div className="flex justify-between gap-2">
              <div className="">
                <Input type="email" placeholder="Your Email" />
              </div>
              <Button size="icon">
                <SendHorizontal className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Ascend Real Estate | All rights
          reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
