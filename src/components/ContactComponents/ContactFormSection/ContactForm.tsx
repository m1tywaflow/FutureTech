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
      className="w-full bg-[#0B0B0B] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 border border-[#1E1E1E]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={getInTouchIcon}
              alt="Get in touch"
              className="w-12 sm:w-14 lg:w-16"
            />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-snug">
              Get in Touch with AI Podcasts
            </h2>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#0F0F0F] p-5 sm:p-6 lg:p-8 rounded-xl border border-[#1F1F1F]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-6">
            <div>
              <label className="text-sm text-gray-300">First Name</label>
              <input
                {...register("firstName")}
                placeholder="Enter First Name"
                className="mt-1 w-full bg-[#111] text-white px-4 py-3 rounded-lg outline-none border border-[#1F1F1F] focus:border-yellow-500"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-300">Last Name</label>
              <input
                {...register("lastName")}
                placeholder="Enter Last Name"
                className="mt-1 w-full bg-[#111] text-white px-4 py-3 rounded-lg outline-none border border-[#1F1F1F] focus:border-yellow-500"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label className="text-sm text-gray-300">Email</label>
            <input
              {...register("email")}
              placeholder="Enter your Email"
              className="mt-1 w-full bg-[#111] text-white px-4 py-3 rounded-lg outline-none border border-[#1F1F1F] focus:border-yellow-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="text-sm text-gray-300">Message</label>
            <textarea
              {...register("message")}
              placeholder="Enter your Message"
              rows={5}
              className="mt-1 w-full bg-[#111] text-white px-4 py-3 rounded-lg outline-none border border-[#1F1F1F] focus:border-yellow-500"
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
              className="w-4 h-4 mt-1 accent-yellow-500"
            />
            <span className="text-gray-300 text-sm">
              I agree with Terms of Use and Privacy Policy
            </span>
          </div>

          {errors.terms && (
            <p className="text-red-500 text-sm mb-4">
              {errors.terms.message}
            </p>
          )}

          <button
            type="submit"
            className="w-full sm:w-auto bg-yellow-500 cursor-pointer hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>

        {sent && (
          <div className="mt-6 p-4 rounded-lg bg-green-600 text-white text-sm font-medium text-center animate-fadeIn">
            ✔ Message Sent Successfully!
          </div>
        )}
      </div>
    </section>
  );
});

export default ContactForm;