import { Twitter, Facebook, Linkedin, ArrowUpRight } from "lucide-react";
import Card from "../../UI/Card/Card";
export default function GetInTouch() {
  return (
    <section className="w-full bg-[#0D0D0D] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border border-neutral-800 p-10 rounded-2xl bg-[#111111]">
        <div className="space-y-4">
          <h2 className="text-white text-lg font-semibold">
            General Inquiries
          </h2>

          <button className="w-full bg-[#1A1A1A] cursor-pointer px-4 py-3 rounded-xl flex justify-between items-center text-gray-300 hover:bg-[#222]">
            contact@ai-podcasts.com
            <ArrowUpRight className="w-4 h-4 text-yellow-400" />
          </button>

          <button className="w-full bg-[#1A1A1A] px-4 py-3 cursor-pointer rounded-xl flex justify-between items-center text-gray-300 hover:bg-[#222]">
            +1 (123) 456-7890
            <ArrowUpRight className="w-4 h-4 text-yellow-400" />
          </button>
        </div>

        <div className="space-y-4">
          <h2 className="text-white text-lg font-semibold">
            Technical Support
          </h2>

          <button className="w-full bg-[#1A1A1A] cursor-pointer px-4 py-3 rounded-xl flex justify-between items-center text-gray-300 hover:bg-[#222]">
            contact@ai-podcasts.com
            <ArrowUpRight className="w-4 h-4 text-yellow-400" />
          </button>

          <button className="w-full bg-[#1A1A1A] cursor-pointer px-4 py-3 rounded-xl flex justify-between items-center text-gray-300 hover:bg-[#222]">
            +1 (123) 456-7890
            <ArrowUpRight className="w-4 h-4 text-yellow-400" />
          </button>
        </div>

        <div className="space-y-4">
          <h2 className="text-white text-lg font-semibold">Our Office</h2>

          <p className="text-gray-400 leading-relaxed">
            Address: 123 AI Tech Avenue, Techville, 54321
          </p>

          <button className="w-fit bg-[#1A1A1A] cursor-pointer px-4 py-3 rounded-xl flex items-center gap-2 text-gray-300 hover:bg-[#222]">
            Get Directions
            <ArrowUpRight className="w-4 h-4 text-yellow-400" />
          </button>
        </div>
        <div className="space-y-4">
          <h2 className="text-white text-lg font-semibold">Connect with Us</h2>
          <Card />
          {/* <div className="flex gap-3">
            <button className="p-4 rounded-xl cursor-pointer bg-[#1A1A1A] hover:bg-[#222]">
              <Twitter className="w-6 h-6 text-white" />
            </button>
            <button className="p-4 rounded-xl cursor-pointer bg-[#1A1A1A] hover:bg-[#222]">
              <Facebook className="w-6 h-6 text-white" />
            </button>
            <button className="p-4 rounded-xl cursor-pointer bg-[#1A1A1A] hover:bg-[#222]">
              <Linkedin className="w-6 h-6 text-white" />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
