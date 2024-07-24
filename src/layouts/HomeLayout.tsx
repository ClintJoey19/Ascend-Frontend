import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="container pt-[8vh]">{children}</div>;
};

export default HomeLayout;
