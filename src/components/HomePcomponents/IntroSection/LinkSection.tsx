// import icon1 from "../../../assets/HomeImg/Icons/Icon1.png";
// import icon2 from "../../../assets/HomeImg/Icons/Icon2.png";
// import icon3 from "../../../assets/HomeImg/Icons/Icon3.png";
// import { MoveUpRight } from "lucide-react";

// export default function LinkSection() {
//   const data = [
//     {
//       icon: icon1,
//       title: "Latest News Updates",
//       subtitle: "Stay Current",
//       description: "Over 1,000 articles published monthly",
//     },
//     {
//       icon: icon2,
//       title: "Expert Contributors",
//       subtitle: "Trusted Insights",
//       description: "50+ renowned AI experts on our team",
//     },
//     {
//       icon: icon3,
//       title: "Global Readership",
//       subtitle: "Worldwide Impact",
//       description: "2 million monthly readers",
//     },
//   ];

//   return (
//     <section className="w-full flex justify-center items-center">
//       <div className="flex  w-full divide-x divide-[#1E1E1E] border border-[#1E1E1E]  overflow-hidden">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col justify-between p-10 w-1/3 bg-[#0D0D0D] hover:bg-[#111111] transition-colors cursor-pointer"
//           >
//             <div className="flex justify-between">
//               <div className="space-y-6">
//                 <img src={item.icon} alt="icon" className="w-10 h-10" />
//                 <div>
//                   <h2 className="text-white text-lg font-semibold mb-1">
//                     {item.title}
//                   </h2>
//                   <p className="text-gray-400 text-sm mb-3">{item.subtitle}</p>
//                   <p className="text-gray-500 text-sm">{item.description}</p>
//                 </div>
//               </div>
//               <div className="mt-8">
//                 <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFD11A] hover:bg-yellow-400 transition-colors">
//                   <MoveUpRight className="text-black w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import { Link } from "react-router-dom";
import icon1 from "../../../assets/HomeImg/Icons/Icon1.png";
import icon2 from "../../../assets/HomeImg/Icons/Icon2.png";
import icon3 from "../../../assets/HomeImg/Icons/Icon3.png";
import { MoveUpRight } from "lucide-react";

export default function LinkSection() {
  const data = [
    {
      icon: icon1,
      title: "Latest News Updates",
      subtitle: "Stay Current",
      description: "Over 1,000 articles published monthly",
    },
    {
      icon: icon2,
      title: "Expert Contributors",
      subtitle: "Trusted Insights",
      description: "50+ renowned AI experts on our team",
    },
    {
      icon: icon3,
      title: "Global Readership",
      subtitle: "Worldwide Impact",
      description: "2 million monthly readers",
    },
  ];

  return (
    <section className="w-full flex justify-center items-center">
      <div className="flex w-full divide-x divide-[#1E1E1E] border border-[#1E1E1E] overflow-hidden">
        {data.map((item, index) => (
          <Link
            to="/coming-soon"
            key={index}
            className="flex flex-col justify-between p-10 w-1/3 bg-[#0D0D0D] hover:bg-[#111111] transition-colors cursor-pointer"
          >
            <div className="flex justify-between">
              <div className="space-y-6">
                <img src={item.icon} alt="icon" className="w-10 h-10" />
                <div>
                  <h2 className="text-white text-lg font-semibold mb-1">
                    {item.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-3">{item.subtitle}</p>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              </div>
              <div className="mt-8">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFD11A] hover:bg-yellow-400 transition-colors">
                  <MoveUpRight className="text-black w-5 h-5" />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
