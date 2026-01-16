import { useRef } from "react";
import GetInTouch from "../../components/ContactComponents/GetInTouchSection/GetInTouch";
import ContactForm from "../../components/ContactComponents/ContactFormSection/ContactForm";
import FAQ from "../../components/ContactComponents/FAQSection/FAQ";
import ContactUsMap from "@/components/ContactComponents/ContactMap/ContactUsMap";

const ContactUs = () => {
  const contactRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <GetInTouch />
      <ContactUsMap />
      <ContactForm ref={contactRef} />
      <FAQ onAskClick={scrollToContact} />
    </>
  );
};

export default ContactUs;
