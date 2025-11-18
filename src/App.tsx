// import Header from "./components/layout/Header/Header";
// import BottomSection from "./components/layout/Bottom/BottomSection";
// import Footer from "./components/layout/Footer/Footer";
// import { Outlet } from "react-router-dom";
// import { useEffect } from "react";
// import Lenis from "lenis";
// function App() {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smoothWheel: true,
//     });

//     let frameId: number;

//     const raf = (time: number) => {
//       lenis.raf(time);
//       frameId = requestAnimationFrame(raf);
//     };

//     frameId = requestAnimationFrame(raf);

//     return () => {
//       cancelAnimationFrame(frameId);
//       lenis.destroy();
//     };
//   }, []);
//   return (
//     <>
//       <Header />
//       <Outlet />
//       <BottomSection />
//       <Footer />
//     </>
//   );
// }

// export default App;
import Header from "./components/layout/Header/Header";
import BottomSection from "./components/layout/Bottom/BottomSection";
import Footer from "./components/layout/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

function App() {
  const { pathname } = useLocation();
  const lenisRef = useRef<Lenis | null>(null);
  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let frameId: number;
    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenisRef.current?.destroy();
    };
  }, []);

  // scroll up
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: false });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <BottomSection />
      <Footer />
    </>
  );
}

export default App;
