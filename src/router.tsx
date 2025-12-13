import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

export const ROUTER_PATHS = {
  HOME: "/",
  NEWS: "/news-page",
  BLOG: "/blog",
  PODCASTS: "/podcasts-page",
  RESOURCES: "/resources",
  CONTACT: "/contact-us",
  COMINGSOON: "/coming-soon",
  NOTFOUND: "*",
  TERMSCODITIONS: "/terms-conditions",
  PRIVACYPOLICY: "/privacy-policy",
  NEWSLETTER: "/news-letter",
  TRENDINGSTORIES: "/trending-stories",
  POLITICS: "/politics",
  AIETHICS: "/ai-ethics",
  AIREVO: "/ai-revolution",
  TECHTALK: "/tech-talk-ai",
  AICONVER: "/ai-conversations",
  EBOOKS: "/ebooks",
  REPORTS: "/reports",
  RESEARCH: "/research-papers",
};

const AppLayout = lazy(() => import("./App"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NewsPage = lazy(() => import("./pages/NewsPage/NewsPage"));
const BlogPage = lazy(() => import("./pages/BlogPage/BlogPage"));
const PodcastsPage = lazy(() => import("./pages/PodcastsPage/PodcastsPage"));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage/ResourcesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/404/NotFoundPage"));
const ComingSoonPage = lazy(() => import("./pages/ComingSoon/ComingSoonPage"));
const TermsConditionsPage = lazy(
  () => import("./pages/Privacy/TermsCondition/TermsConditionPage")
);
const PrivacyPolicyPage = lazy(
  () => import("./pages/Privacy/PrivacyPolicy/PrivacyPolicyPage")
);
const NewsLetterPage = lazy(
  () => import("./pages/NewsLetterPage/NewsLetterPage")
);
const TrendingStoriesPage = lazy(
  () => import("./pages/NEWS/TrendingStories/TrendingStoriesPage")
);
const PoliticsPage = lazy(() => import("./pages/NEWS/Politics/PoliticsPage"));
const AIEthicsPage = lazy(
  () => import("./pages/BLOGS/AiEthicsPage/AiEthicsPage")
);
const AIRevolutionPage = lazy(
  () => import("./pages/PodcastsPack/AiRevo/AIRevolutionPage")
);
const TechTalkPage = lazy(
  () => import("./pages/PodcastsPack/TechTalkAi/TechTalkPage")
);
const AiConversationsPage = lazy(
  () => import("./pages/PodcastsPack/AiConversations/AiConversationsPage")
);
const EbooksPage = lazy(
  () => import("./pages/ResourcesPack/EbooksPage/EbooksPage")
);
const ReportsPage = lazy(
  () => import("./pages/ResourcesPack/ReportsPage/ReportsPage")
);
const ResearchPage = lazy(
  () => import("./pages/ResourcesPack/ResearchPapersPage/ResearchPage")
);

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTER_PATHS.NEWS, element: <NewsPage /> },
      { path: ROUTER_PATHS.PODCASTS, element: <PodcastsPage /> },
      { path: ROUTER_PATHS.RESOURCES, element: <ResourcesPage /> },
      { path: ROUTER_PATHS.CONTACT, element: <ContactPage /> },
      { path: ROUTER_PATHS.BLOG, element: <BlogPage /> },
      { path: ROUTER_PATHS.NOTFOUND, element: <NotFoundPage /> },
      { path: ROUTER_PATHS.COMINGSOON, element: <ComingSoonPage /> },
      { path: ROUTER_PATHS.TERMSCODITIONS, element: <TermsConditionsPage /> },
      { path: ROUTER_PATHS.PRIVACYPOLICY, element: <PrivacyPolicyPage /> },
      { path: ROUTER_PATHS.NEWSLETTER, element: <NewsLetterPage /> },
      { path: ROUTER_PATHS.TRENDINGSTORIES, element: <TrendingStoriesPage /> },
      { path: ROUTER_PATHS.POLITICS, element: <PoliticsPage /> },
      { path: ROUTER_PATHS.AIETHICS, element: <AIEthicsPage /> },
      { path: ROUTER_PATHS.AIREVO, element: <AIRevolutionPage /> },
      { path: ROUTER_PATHS.TECHTALK, element: <TechTalkPage /> },
      { path: ROUTER_PATHS.AICONVER, element: <AiConversationsPage /> },
      { path: ROUTER_PATHS.EBOOKS, element: <EbooksPage /> },
      { path: ROUTER_PATHS.REPORTS, element: <ReportsPage /> },
      { path: ROUTER_PATHS.RESEARCH, element: <ResearchPage /> },
    ],
  },
]);
