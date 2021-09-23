/**
 * 16进制颜色值转为rgba
 *
 * @param  {[String]}
 * @param  {[Number]}
 * @return {[String]}
 */
const hexToRgba = (hex, alpha) => {
  if (!hex || typeof alpha !== "number" || alpha > 1 || alpha < 0) {
    return "";
  }

  const replaced = hex.replace("#", "");

  if (replaced.length !== 6) {
    return "";
  }

  const parsed = parseInt(replaced, 16);
  const r = (parsed >> 16) & 255;
  const g = (parsed >> 8) & 255;
  const b = parsed & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default hexToRgba;
