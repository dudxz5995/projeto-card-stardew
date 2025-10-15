document.getElementById("enter-btn").addEventListener("click", () => {

  document.body.style.transition = "opacity 1s ease";
  document.body.style.opacity = 0;

  setTimeout(() => {
   
    window.location.href = "card-duda.html";
  }, 1000);
});
