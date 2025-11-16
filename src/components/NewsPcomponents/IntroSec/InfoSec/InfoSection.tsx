import ClimateImg from "../../../../assets/NewsPageImg/heroSec/climateAction.png";
export default function InfoSection() {
  return (
    <section className="w-full text-white px-6 bg-[#0D0D0D]">
      <div className="w-full px-40 border-b border-[#2A2A2A] pb-8">
        <div className="flex justify-between">
          <img src={ClimateImg} alt="Climate-big-img" />
          <div className="max-w-5xl mt-20">
            <h1 className="text-3xl font-semibold">
              Global Climate Summit Addresses Urgent Climate Action
            </h1>
            <p className="text-[#98989A] text-sm">
              World leaders gathered at the Global Climate Summit to discuss
              urgent climate action, emissions reductions, and renewable energy
              targets.
            </p>
            <div className="flex gap-10 py-20">
              <div>
                <h1 className="text-[#98989A] text-sm">Category</h1>
                <p className="font-semibold">Environment</p>
              </div>
              <div>
                <h1 className="text-[#98989A] text-sm">Publication Date</h1>
                <p className="font-semibold">October 10, 2023</p>
              </div>
              <div>
                <h1 className="text-[#98989A] text-sm">Author</h1>
                <p className="font-semibold">Jane Smith</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
