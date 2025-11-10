import ExploreSection from "../../components/HomePcomponents/IntroSection/ExploreSection";
import LinkSection from "../../components/HomePcomponents/IntroSection/LinkSection";
import FutureTech from "../../components/HomePcomponents/FutureTechSection/FutureTech";
import BlogPosts from "../../components/HomePcomponents/BlogPostsSection/BlogPosts";
import BlogTabs from "../../components/HomePcomponents/BlogPostsSection/BlogTabs";
import FutureResources from "../../components/HomePcomponents/ResourcesSection/FutureResources";
const HomePage = () => {
  return (
    <>
      <ExploreSection />
      <LinkSection />
      <FutureTech />
      <BlogPosts />
      <BlogTabs />
      <FutureResources />
    </>
  );
};

export default HomePage;
