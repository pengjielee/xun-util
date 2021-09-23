export const isDev = process.env.NODE_ENV == "development";

export const isProd = process.env.NODE_ENV == "production";

export const isWechat = /MicroMessenger/i.test(ua);

const ua = window.navigator.userAgent;

export const isAndroid = () =>
  ua.indexOf("Android") > -1 || u.indexOf("Linux") > -1;

export const isIphone = () => ua.indexOf("iPhone") > -1;

export const isMobile = () => !!ua.match(/AppleWebKit.*Mobile.*/);

export const isIpad = () => ua.indexOf("iPad") > -1;

export const isSafari = () => ua.indexOf("Safari") > -1;

export const isBrowser = () =>
  ![typeof window, typeof document].includes("undefined");

const env = {
  isDev,
  isProd,
  isWechat,
  isAndroid,
  isIphone,
  isMobile,
  isIpad,
  isSafari,
  isBrowser,
};

export default env;
