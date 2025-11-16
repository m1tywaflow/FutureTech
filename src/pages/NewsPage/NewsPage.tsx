import IntroSection from "../../components/NewsPcomponents/IntroSec/IntroSection";
import InfoSection from "../../components/NewsPcomponents/IntroSec/InfoSec/InfoSection";
import RowLinks from "../../components/NewsPcomponents/IntroSec/InfoSec/RowLinks";
import InsightsBanner from "../../components/NewsPcomponents/VisualInsights/InsightsBanner";
import VisualInsightsSec from "../../components/NewsPcomponents/VisualInsights/VisualInsightsSec";
const NewsPage = () => {
  return (
    <>
      <IntroSection />
      <InfoSection />
      <RowLinks />
      <InsightsBanner />
      <VisualInsightsSec />
    </>
  );
};
export default NewsPage;
