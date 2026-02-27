document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Mensagem enviada! Obrigado pelo contato.");
  this.reset();
});
