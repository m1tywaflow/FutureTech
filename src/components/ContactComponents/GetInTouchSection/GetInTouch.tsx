import Card from "../../UI/Card/Card";
import CopyButton from "../../UI/CopyButton/CopyButton";
import { ArrowUpRight } from "lucide-react";
import Tooltip from "../../UI/Location/LocationType";

export default function GetInTouch() {
  return (
    <section className="w-full bg-[#0D0D0D] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border border-neutral-800 p-10 rounded-2xl bg-[#111111]">
        <div className="space-y-4">
          <h2 className="text-white text-lg font-semibold">
            General Inquiries
          </h2>
          <CopyButton value="contact@ai-podcasts.com" />
          <CopyButton value="+1 (123) 456-7890" />
        </div>
        <div className="space-y-4">
          <h2 className="text-white text-lg font-semibold">
            Technical Support
          </h2>
          <CopyButton value="contact@ai-podcasts.com" />
          <CopyButton value="+1 (123) 456-7890" />
        </div>
        <div className="space-y-4">
          <Tooltip />
          <h2 className="text-white text-lg font-semibold">Our Office</h2>
          <p className="text-gray-400 leading-relaxed">
            Address: 123 AI Tech Avenue, Techville, 54321
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=123+AI+Tech+Avenue+Techville"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit bg-[#1A1A1A] px-4 py-3 rounded-xl flex items-center gap-2 text-gray-300 hover:bg-[#222]"
          >
            Get Directions
            <ArrowUpRight className="w-4 h-4 text-yellow-400" />
          </a>
        </div>
        <div className="space-y-4">
          <h2 className="text-white text-lg font-semibold">Connect with Us</h2>
          <Card />
        </div>
      </div>
    </section>
  );
}
