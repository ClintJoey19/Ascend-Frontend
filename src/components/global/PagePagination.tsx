import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PagePagination = () => {
  return (
    <section className="flex items-center justify-between">
      <Button disabled={true}>
        <ArrowLeft />
      </Button>
      <Button>
        <ArrowRight />
      </Button>
    </section>
  );
};

export default PagePagination;
