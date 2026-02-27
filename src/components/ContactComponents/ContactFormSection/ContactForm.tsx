import { useForm } from "react-hook-form";
import { z } from "zod";
import { forwardRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import getInTouchIcon from "../../../assets/ContactUs/Icons/getintouchIcon.png";

const schema = z.object({
  firstName: z.string().min(4, "First name is too short"),
  lastName: z.string().min(4, "Last name is too short"),
  email: z
    .string()
    .email("Invalid email format")
    .refine((val) => {
      const [localPart] = val.split("@");
      return localPart.length >= 4;
    }, "Email must contain at least 4 characters before @"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  terms: z.boolean().refine((v) => v === true, {
    message: "You must accept the terms",
  }),
});

type FormData = z.infer<typeof schema>;
type ContactFormProps = {};

const ContactForm = forwardRef<HTMLElement, ContactFormProps>((_, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [sent, setSent] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#0B0B0B] py-20 px-6 overflow-hidden"
    >
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#BFA34A]/10 blur-[160px] rounded-full" />
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-[#111] border border-[#1F1F1F]">
              <img
                src={getInTouchIcon}
                alt="Get in touch"
                className="w-12 sm:w-14"
              />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Get in Touch
          </h2>
          <p className="text-[#9A9A9A] mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Have questions about AI podcasts or collaboration ideas? Send us a
            message and our team will get back to you soon.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.4)]"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-sm text-[#A1A1A1]">First Name</label>
              <input
                {...register("firstName")}
                placeholder="Enter first name"
                className="mt-2 w-full bg-[#111] border border-[#262626] px-4 py-3 rounded-xl text-white outline-none focus:border-[#BFA34A] transition"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm text-[#A1A1A1]">Last Name</label>
              <input
                {...register("lastName")}
                placeholder="Enter last name"
                className="mt-2 w-full bg-[#111] border border-[#262626] px-4 py-3 rounded-xl text-white outline-none focus:border-[#BFA34A] transition"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="mb-6">
            <label className="text-sm text-[#A1A1A1]">Email</label>
            <input
              {...register("email")}
              placeholder="Enter your email"
              className="mt-2 w-full bg-[#111] border border-[#262626] px-4 py-3 rounded-xl text-white outline-none focus:border-[#BFA34A] transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label className="text-sm text-[#A1A1A1]">Message</label>
            <textarea
              {...register("message")}
              rows={5}
              placeholder="Write your message..."
              className="mt-2 w-full bg-[#111] border border-[#262626] px-4 py-3 rounded-xl text-white outline-none focus:border-[#BFA34A] transition resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <div className="flex items-start gap-3 mb-6">
            <input
              type="checkbox"
              {...register("terms")}
              className="w-4 h-4 mt-1 accent-[#BFA34A]"
            />
            <span className="text-[#9A9A9A] text-sm">
              I agree with Terms of Use and Privacy Policy
            </span>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm mb-4">{errors.terms.message}</p>
          )}
          <button
            type="submit"
            className="w-full sm:w-auto bg-gradient-to-r from-[#BFA34A] to-[#E7D27A] text-black font-semibold px-8 py-3 rounded-xl hover:scale-[1.03] transition"
          >
            Send Message
          </button>
        </form>
        {sent && (
          <div className="mt-6 text-center bg-[#132A1B] border border-[#1E4D2B] text-[#7CFFB2] py-3 rounded-xl text-sm">
            Message sent successfully !
          </div>
        )}
      </div>
    </section>
  );
});

export default ContactForm;
