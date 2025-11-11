import ExploreSection from "../../components/HomePcomponents/IntroSection/ExploreSection";
import LinkSection from "../../components/HomePcomponents/IntroSection/LinkSection";
import FutureBanner from "../../components/HomePcomponents/FutureTechSection/FutureBanner";
import FutureTech from "../../components/HomePcomponents/FutureTechSection/FutureTech";
import BlogPosts from "../../components/HomePcomponents/BlogPostsSection/BlogPosts";
import BlogTabs from "../../components/HomePcomponents/BlogPostsSection/BlogTabs";
import ResourcesBanner from "../../components/HomePcomponents/ResourcesSection/ResourcesBanner";
import FutureResources from "../../components/HomePcomponents/ResourcesSection/FutureResources";

const HomePage = () => {
  return (
    <>
      <ExploreSection />
      <LinkSection />
      <FutureBanner />
      <FutureTech />
      <BlogPosts />
      <BlogTabs />
      <ResourcesBanner />
      <FutureResources />
    </>
  );
};

export default HomePage;
