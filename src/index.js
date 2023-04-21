import cipher from './cipher.js';

document.getElementById("encode").addEventListener("click", function(){
  const texto = document.getElementById("message").value;
  const offset = document.getElementById("offset").value;
  document.getElementById("message2").value = cipher.encode(texto,offset);
}, true);
document.getElementById("decode").addEventListener("click", function(){

  const texto = document.getElementById("message").value;
  const offset = document.getElementById("offset").value;
  document.getElementById("message2").value = cipher.decode(texto,offset);
}, true);