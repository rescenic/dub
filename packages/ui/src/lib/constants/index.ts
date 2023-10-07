export const LOCALHOST_GEO_DATA = {
  city: "San Francisco",
  region: "CA",
  country: "US",
  latitude: "37.7695",
  longitude: "-122.385",
};
export const LOCALHOST_IP = "63.141.57.109";

export const FRAMER_MOTION_LIST_ITEM_VARIANTS = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: "spring" } },
};

export const STAGGER_CHILD_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, type: "spring" } },
};

export const SWIPE_REVEAL_ANIMATION_SETTINGS = {
  initial: { height: 0 },
  animate: { height: "auto" },
  exit: { height: 0 },
  transition: { duration: 0.15, ease: "easeOut" },
};

export const FADE_IN_ANIMATION_SETTINGS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

export const PAGINATION_LIMIT = 100;

export const HOME_DOMAIN = "https://dub.co";

export const APP_HOSTNAMES = new Set([
  "app.dub.co",
  "preview.dub.co",
  "localhost:8888",
  "localhost",
]);

export const APP_DOMAIN =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://app.dub.co"
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
    ? "https://preview.dub.co"
    : "http://localhost:8888";

export const APP_DOMAIN_WITH_NGROK =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://app.dub.co"
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
    ? "https://preview.dub.co"
    : process.env.NGROK_URL;

export const API_HOSTNAMES = new Set([
  "api.dub.co",
  "api.dub.sh",
  "api.localhost:8888",
]);

export const API_DOMAIN =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://api.dub.co"
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
    ? "https://api.dub.sh"
    : "http://api.localhost:8888";

export const ADMIN_HOSTNAMES = new Set([
  "admin.dub.co",
  "admin.localhost:8888",
]);

export const DEFAULT_REDIRECTS = {
  home: "https://dub.co",
  dub: "https://dub.co",
  signin: "https://app.dub.co/login",
  login: "https://app.dub.co/login",
  register: "https://app.dub.co/register",
  signup: "https://app.dub.co/register",
  app: "https://app.dub.co",
  dashboard: "https://app.dub.co",
  links: "https://app.dub.co/links",
  settings: "https://app.dub.co/settings",
  welcome: "https://app.dub.co/welcome",
  discord: "https://twitter.com/dubdotco", // placeholder for now
  tags: "https://dub.co/help/how-to-use-tags",
};

export const DUB_HEADERS = {
  headers: {
    "x-powered-by": "Dub.co - Link management for modern marketing teams",
  },
};

export const FAVICON_FOLDER = "/_static/favicons";
export const GOOGLE_FAVICON_URL =
  "https://www.google.com/s2/favicons?sz=64&domain_url=";

export const DUB_LOGO = "https://d2vwwcvoksz7ty.cloudfront.net/logo.png";
export const DUB_THUMBNAIL =
  "https://d2vwwcvoksz7ty.cloudfront.net/thumbnail.png";

export const SHOW_BACKGROUND_SEGMENTS = [
  "tools",
  "pricing",
  "help",
  "features",
  "customers",
  "blog",
  "(blog-post)",
  "login",
  "register",
  "auth",
];

export const allTools = ["metatags", "inspector"];

export { default as COUNTRIES } from "./countries";
export { default as ccTLDs } from "./cctlds";

export const SECOND_LEVEL_DOMAINS = new Set([
  "com",
  "co",
  "net",
  "org",
  "edu",
  "gov",
  "in",
]);

export const SPECIAL_APEX_DOMAINS = new Set([
  "my.id",
  "github.io",
  "vercel.app",
  "now.sh",
  "pages.dev",
  "webflow.io",
  "netlify.app",
  "fly.dev",
  "web.app",
]);
