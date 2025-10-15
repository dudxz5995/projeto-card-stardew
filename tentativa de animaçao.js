document.getElementById("enter-btn").addEventListener("click", () => {
  // Adiciona uma leve animação antes de mudar de página
  document.body.style.transition = "opacity 1s ease";
  document.body.style.opacity = 0;

  setTimeout(() => {
    // Redireciona pra card-duda.html
    window.location.href = "card-duda.html";
  }, 1000); // Espera 1 segundo pra suavizar a transição
});
