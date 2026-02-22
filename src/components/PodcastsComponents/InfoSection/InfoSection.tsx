// import revoIcon from "../../../assets/Podcasts/icons/revoIcon.png";
// import convIcon from "../../../assets/Podcasts/icons/convIcon.png";
// import firstBigImg from "../../../assets/Podcasts/bigImg/fistBig.png";
// import secondBigImg from "../../../assets/Podcasts/bigImg/secondBig.png";
// import StarsRating from "../../UI/StarRating/StarsRating";
// import { Link } from "react-router-dom";
// export default function InfoSection() {
//   const podcasts = [
//     {
//       id: 1,
//       icon: revoIcon,
//       title: "AI Revolution",
//       host: "Dr. Sarah Mitchell",
//       bigImg: firstBigImg,
//       description:
//         "Delves into the transformative impact of AI across industries, featuring expert interviews and real-world case studies.",
//       stats: {
//         episodes: 50,
//         length: "30 min",
//         frequency: "Weekly",
//       },
//     },
//     {
//       id: 2,
//       icon: convIcon,
//       title: "AI Conversations",
//       host: "Mark Anderson",
//       bigImg: secondBigImg,
//       description:
//         "Engage in thought-provoking conversations with leading experts about the future of AI and its impact on society.",
//       stats: {
//         episodes: 40,
//         length: "40 min",
//         frequency: "Monthly",
//       },
//     },
//   ];

//   return (
//     <section className="max-w-8xl bg-[#0A0A0A] text-white py-24 px-20">
//       <div className="border border-[#1E1E1E] rounded-2xl overflow-hidden">
//         <div className="grid grid-rows-2 divide-y divide-[#1E1E1E]">
//           {podcasts.map((item) => (
//             <div
//               key={item.id}
//               className="grid grid-cols-2 divide-x divide-[#1E1E1E]"
//             >
//               <div className="p-12 flex flex-col justify-center gap-6">
//                 <img src={item.icon} alt={item.title} className="w-14 h-14" />

//                 <h1 className="text-3xl font-semibold">{item.title}</h1>

//                 <div className="flex gap-1">
//                   <StarsRating id={item.id} />
//                 </div>
//                 <p className="text-[#98989A] text-sm">
//                   Host: <span className="text-white">{item.host}</span>
//                 </p>
//                 <Link
//                   to="/coming-soon"
//                   className="px-4 py-2 border border-[#1E1E1E] rounded-md bg-[#0F0F0F] w-fit hover:bg-[#1A1A1A] transition"
//                 >
//                   Listen Podcast →
//                 </Link>
//               </div>
//               <div className="flex flex-col p-12 gap-6">
//                 <img
//                   src={item.bigImg}
//                   alt={item.title}
//                   className="rounded-xl w-full object-cover"
//                 />
//                 <div className="bg-[#0F0F0F] border border-[#1E1E1E] rounded-xl px-6 py-5">
//                   <p className="text-[#C7C7C7]">{item.description}</p>
//                 </div>
//                 <div className="grid grid-cols-3 gap-4">
//                   <div className="bg-[#0F0F0F] border border-[#1E1E1E] px-6 py-4 rounded-xl">
//                     <p className="text-[#98989A] text-sm">Total Episodes</p>
//                     <p className="text-white text-xl font-semibold mt-1">
//                       {item.stats.episodes}
//                     </p>
//                   </div>

//                   <div className="bg-[#0F0F0F] border border-[#1E1E1E] px-6 py-4 rounded-xl">
//                     <p className="text-[#98989A] text-sm">Avg Length</p>
//                     <p className="text-white text-xl font-semibold mt-1">
//                       {item.stats.length}
//                     </p>
//                   </div>

//                   <div className="bg-[#0F0F0F] border border-[#1E1E1E] px-6 py-4 rounded-xl">
//                     <p className="text-[#98989A] text-sm">Frequency</p>
//                     <p className="text-white text-xl font-semibold mt-1">
//                       {item.stats.frequency}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import revoIcon from "../../../assets/Podcasts/icons/revoIcon.png";
import convIcon from "../../../assets/Podcasts/icons/convIcon.png";
import firstBigImg from "../../../assets/Podcasts/bigImg/fistBig.png";
import secondBigImg from "../../../assets/Podcasts/bigImg/secondBig.png";
import StarsRating from "../../UI/StarRating/StarsRating";
import { Link } from "react-router-dom";

export default function InfoSection() {
  const podcasts = [
    {
      id: 1,
      icon: revoIcon,
      title: "AI Revolution",
      host: "Dr. Sarah Mitchell",
      bigImg: firstBigImg,
      description:
        "Delves into the transformative impact of AI across industries, featuring expert interviews and real-world case studies.",
      stats: {
        episodes: 50,
        length: "30 min",
        frequency: "Weekly",
      },
    },
    {
      id: 2,
      icon: convIcon,
      title: "AI Conversations",
      host: "Mark Anderson",
      bigImg: secondBigImg,
      description:
        "Engage in thought-provoking conversations with leading experts about the future of AI and its impact on society.",
      stats: {
        episodes: 40,
        length: "40 min",
        frequency: "Monthly",
      },
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24 text-white">
      <div className="flex flex-col gap-16">
        {podcasts.map((item, index) => (
          <div
            key={item.id}
            className="grid md:grid-cols-2 gap-10 items-center border border-white/10 rounded-3xl p-10 bg-gradient-to-br from-zinc-900 to-black"
          >
            <div className="w-full h-[160px] md:h-[400px] overflow-hidden rounded-2xl">
              <img
                src={item.bigImg}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-6 ">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <img src={item.icon} alt="" className="w-12 h-12" />
                  <StarsRating id={item.id} />
                </div>

                <div className="border-b border-white/10 pb-4">
                  <h2 className="text-4xl font-semibold leading-tight">
                    {item.title}
                  </h2>
                </div>

                <div className="border-b border-white/10 pb-4">
                  <p className="text-zinc-400 text-lg">
                    Host: <span className="text-white">{item.host}</span>
                  </p>
                </div>

                <div className="border-b border-white/10 pb-4">
                  <p className="text-zinc-400 text-base leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>

                <div className="flex gap-6 mt-2 border-b border-white/10 pb-4">
                  <div className="flex-1 text-center border-r border-white/10 pr-4">
                    <p className="text-sm text-zinc-500">Episodes</p>
                    <p className="text-xl font-semibold">
                      {item.stats.episodes}
                    </p>
                  </div>

                  <div className="flex-1 text-center border-r border-white/10 px-4">
                    <p className="text-sm text-zinc-500">Length</p>
                    <p className="text-xl font-semibold">{item.stats.length}</p>
                  </div>

                  <div className="flex-1 text-center pl-4">
                    <p className="text-sm text-zinc-500">Frequency</p>
                    <p className="text-xl font-semibold">
                      {item.stats.frequency}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/coming-soon"
                className="mt-4 w-fit px-6 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90 transition"
              >
                Listen Podcast →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
