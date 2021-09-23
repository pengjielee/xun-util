/**
 * http跳转https
 *
 * @return {[void]}
 */
const redirectHttps = () => {
  if (location.protocol !== "https:") {
    location.replace("https://" + location.href.split("//")[1]);
  }
};

export default redirectHttps;
