import Card from "../../UI/Card/Card";
import CopyButton from "../../UI/CopyButton/CopyButton";
import Tooltip from "../../UI/Location/LocationType";

export default function GetInTouch() {
  return (
    <section className="w-full bg-[#0D0D0D] py-24">
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
          <h1 className="text-white text-lg font-semibold">We located here :</h1>
          <Tooltip />
        </div>

        <div className="space-y-4 ">
          <h2 className="text-white text-lg font-semibold">Connect with Us</h2>
          <Card />
        </div>
      </div>
    </section>
  );
}
