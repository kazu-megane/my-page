export const TWITTER_URL = "https://twitter.com/kazuya_frame/";
export const INSTAGRAM_URL = "https://www.instagram.com/kazuya_frame/";
export const GITHUB_URL = "https://github.com/kazu-megane";

export const MINIMUM_WAIT_TIME = 350;

export const PAGE_TYPE = {
  HOME: "HOME",
  ABOUT: "ABOUT",
  WORK: "WORK",
  PHOTO: "PHOTO",
  VIDEO: "VIDEO",
  CONTACT: "CONTACT",
} as const;
export type PageType = typeof PAGE_TYPE[keyof typeof PAGE_TYPE];