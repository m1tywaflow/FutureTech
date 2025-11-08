import ExploreSection from "../../components/HomePcomponents/IntroSection/ExploreSection";
import LinkSection from "../../components/HomePcomponents/IntroSection/LinkSection";
import FutureTech from "../../components/HomePcomponents/FutureTechSection/FutureTech";
import BlogPosts from "../../components/HomePcomponents/BlogPostsSection/BlogPosts";
const HomePage = () => {
  return (
    <>
      <ExploreSection />
      <LinkSection />
      <FutureTech />
      <BlogPosts />
    </>
  );
};

export default HomePage;
