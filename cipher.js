const cipher = {
  encode : function (offset, text){
    if (typeof offset !== "number" || typeof text !== 'string'){
      throw new TypeError("type error")
    }
    if (!text)
      return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    offset = (offset %26 + 26) % 26;
    return text.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+offset)%26]);
  },
  decode : function (offset, text){
    if (typeof offset !== "number" || typeof text !== 'string'){
      throw new TypeError("type error")
    }
    if (!text)
      return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    offset = (offset %26 - 26) % 26;
    return text.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-offset)%26]);
  }
};

export default cipher;
