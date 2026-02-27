import Card from "../../UI/Card/Card";
import CopyButton from "../../UI/CopyButton/CopyButton";
import Tooltip from "../../UI/Location/LocationType";

export default function GetInTouch() {
  return (
    <section className="relative w-full bg-[#0D0D0D] py-24">
      <div className="pointer-events-none absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#BFA34A]/10 blur-[140px] rounded-full" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-6 hover:border-[#BFA34A]/40 transition">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#BFA34A] rounded-full" />
              <h2 className="text-white font-semibold">General Inquiries</h2>
            </div>
            <div className="space-y-3">
              <CopyButton value="contact@ai-podcasts.com" />
              <CopyButton value="+1 (123) 456-7890" />
            </div>
          </div>
          <div className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-6 hover:border-[#BFA34A]/40 transition">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#BFA34A] rounded-full" />
              <h2 className="text-white font-semibold">Technical Support</h2>
            </div>
            <div className="space-y-3">
              <CopyButton value="contact@ai-podcasts.com" />
              <CopyButton value="+1 (123) 456-7890" />
            </div>
          </div>
          <div className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-6 hover:border-[#BFA34A]/40 transition">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#BFA34A] rounded-full" />
              <h2 className="text-white font-semibold">Our Location</h2>
            </div>
            <Tooltip />
          </div>
          <div className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-6 hover:border-[#BFA34A]/40 transition">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#BFA34A] rounded-full" />
              <h2 className="text-white font-semibold">Connect with Us</h2>
            </div>
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
}
