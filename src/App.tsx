// import Header from "./components/layout/Header/Header";
// import BottomSection from "./components/layout/Bottom/BottomSection";
// import Footer from "./components/layout/Footer/Footer";
// import ScrollToTopButton from "./components/UI/ScrollToTop/ScrollTop";
// import HintBox from "./components/UI/HintBox/HintBox";
// import { Outlet, useLocation } from "react-router-dom";
// import { useEffect, useRef } from "react";
// import Lenis from "lenis";

// function App() {
//   const { pathname } = useLocation();
//   const lenisRef = useRef<Lenis | null>(null);
//   useEffect(() => {
//     lenisRef.current = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smoothWheel: true,
//     });

//     let frameId: number;
//     const raf = (time: number) => {
//       lenisRef.current?.raf(time);
//       frameId = requestAnimationFrame(raf);
//     };

//     frameId = requestAnimationFrame(raf);

//     return () => {
//       cancelAnimationFrame(frameId);
//       lenisRef.current?.destroy();
//     };
//   }, []);

//   // scroll up
//   useEffect(() => {
//     if (lenisRef.current) {
//       lenisRef.current.scrollTo(0, { immediate: false });
//     } else {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   }, [pathname]);

//   return (
//     <>
//       <Header />
//       <Outlet />
//       <BottomSection />
//       <HintBox />
//       <ScrollToTopButton />
//       <Footer />
//     </>
//   );
// }

// export default App;
import { useScroll, useSpring, motion } from "framer-motion";
import Header from "./components/layout/Header/Header";
import BottomSection from "./components/layout/Bottom/BottomSection";
import Footer from "./components/layout/Footer/Footer";
import ScrollToTopButton from "./components/UI/ScrollToTop/ScrollTop";
import HintBox from "./components/UI/HintBox/HintBox";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

function App() {
  const { pathname } = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

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

  useEffect(() => {
    lenisRef.current?.scrollTo(0);
  }, [pathname]);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 z-9999 h-1 w-full origin-left bg-yellow-400"
      />

      <Header />

      <Outlet />

      <BottomSection />
      <HintBox />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
