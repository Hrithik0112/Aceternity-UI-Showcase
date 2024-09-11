import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return (
    <div
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        "
    >
      <div className=" p-10 md:p-4 md:px-20">
        <div className="text-3xl md:text-7xl font-bold text-black">Have questions ?</div>
        <div className="  font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
          Get answers.
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How to start ?</AccordionTrigger>
            <AccordionContent>
              You can start by contacting us at our-servies@gmail.com . We will get back to you within 24 hours.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can you redesign an existing website?</AccordionTrigger>
            <AccordionContent>
              Absolutely! We can take your existing website and give it a fresh, modern look, improve performance, and enhance the user experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you offer custom website designs or use templates?</AccordionTrigger>
            <AccordionContent>
              We specialize in custom website designs tailored to meet your specific business needs. However, we can also work with templates if you prefer a quicker and more budget-friendly option.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Pricing ?</AccordionTrigger>
            <AccordionContent>
              We offer custom tailored solutions for your business and We are flexible. Contact us to get a quote.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </div>
  );
};
export default FAQS;
