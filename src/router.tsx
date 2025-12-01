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
    ],
  },
]);
