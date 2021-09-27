const HtmlUtil = {
  //1.用浏览器内部转换器实现HTML转码
  encode: function (html) {
    let div = document.createElement("div");
    div.textContent != undefined
      ? (div.textContent = html)
      : (div.innerText = html);
    const output = div.innerHTML;
    div = null;
    return output;
  },
  //2.用浏览器内部转换器实现HTML解码
  decode: function (text) {
    let div = document.createElement("div");
    div.innerHTML = text;
    const output = div.innerText || div.textContent;
    div = null;
    return output;
  },
  //3.用正则表达式实现HTML转码
  encodeByReg: function (str) {
    let s = "";
    if (str.length == 0) {
      return "";
    }
    s = str.replace(/&/g, "&amp;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    return s;
  },
  //4.用正则表达式实现HTML解码
  decodeByReg: function (str) {
    let s = "";
    if (str.length == 0) {
      return "";
    }
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "'");
    s = s.replace(/&quot;/g, '"');
    return s;
  },
};

export default HtmlUtil;
