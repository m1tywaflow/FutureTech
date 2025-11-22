import Banner from "../../components/PodcastsComponents/Intro/Banner";
import InfoSection from "../../components/PodcastsComponents/InfoSection/InfoSection";
import PodcastsBanner from "../../components/PodcastsComponents/PodcastsBanner/PodcastsBanner";
import RowLinks from "../../components/PodcastsComponents/RowImgLinks/RowLinks";
const PodcastsPage = () => {
  return (
    <>
      <Banner />
      <InfoSection />
      <PodcastsBanner />
      <RowLinks />
    </>
  );
};
export default PodcastsPage;
