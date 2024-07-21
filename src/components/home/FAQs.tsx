import SectionHeader from "../global/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CallToAction from "./CallToAction";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How can I find properties that match my needs?",
    answer:
      "Our website offers a user-friendly search function with various filters. You can narrow down your search by location, price range, property type (house, condo, apartment, etc.), size (bedrooms, bathrooms), and even specific amenities (pool, garage, pet-friendly).",
  },
  {
    question: "Is there a way to save my favorite listings?",
    answer:
      "Absolutely! You can create a free account on our website to save your favorite listings for future reference. This allows you to easily compare different properties and revisit those that caught your eye.",
  },
  {
    question: "Do you offer virtual tours of the properties?",
    answer:
      "Many of our listings include virtual tours that allow you to explore the property from the comfort of your own home. This gives you a great sense of the layout, space, and overall feel of a property before scheduling an in-person showing.",
  },
  {
    question: "How can I contact a real estate agent if I have questions?",
    answer:
      "Each property listing typically features contact information for the associated agent. You can also find contact details for our general team on our website. We're happy to answer any questions you may have about the buying or selling process.",
  },
  {
    question: "Are there any fees associated with using your website?",
    answer:
      "No, browsing our website and searching for properties is completely free. There are only fees involved if you decide to move forward with a transaction, which would be handled directly with the agent or seller.",
  },
];

const FAQs = () => {
  return (
    <section className="container flex flex-col gap-8">
      <SectionHeader title="Frequently Asked Questions" />
      <Accordion type="single" collapsible>
        {faqs.map(({ question, answer }, i) => (
          <AccordionItem value={`item${i}`}>
            <AccordionTrigger className="text-xl md:text-2xl">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-xl md:text-2xl text-slate-600">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <CallToAction />
    </section>
  );
};

export default FAQs;
