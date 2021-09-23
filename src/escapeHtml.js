const htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/**
 * 转义HTML
 *
 * @param  {[String]}
 * @return {[String]}
 */
const escapeHtml = (string) =>
  string.replace(/[&<>"']/g, (tag) => htmlEscapes[tag] || tag);

export default escapeHtml;
