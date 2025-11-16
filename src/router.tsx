import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

export const ROUTER_PATHS = {
  HOME: "/",
  NEWS: "/news-page",
  BLOG: "/blog",
  PODCASTS: "/podcasts-page",
  RESOURCES: "/resources",
  CONTACT: "/contact-us",
};

const AppLayout = lazy(() => import("./App"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NewsPage = lazy(() => import("./pages/NewsPage/NewsPage"));
const BlogPage = lazy(() => import("./pages/BlogPage/BlogPage"));
const PodcastsPage = lazy(() => import("./pages/PodcastsPage/PodcastsPage"));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage/ResourcesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));

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
    ],
  },
]);
