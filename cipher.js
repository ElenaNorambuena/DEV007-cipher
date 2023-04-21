const cipher = {
  encode : function (text, offset){
    if (!text)
      return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    offset = (offset %26 + 26) % 26;
    return text.replace(/[A-Z]/g, c=> letras[(letras.indexOf(c)+offset)%26]);
  },
  decode : function (text, offset){
    if (!text)
      return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    offset = (offset %26 + 26) % 26;
    return text.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-offset)%26]);
  }
}

export default cipher;
