const iPhone = document.getElementById("iPhone");
const animate = document.getElementById("animate");

animate.addEventListener("change", function () {
  if (this.checked) iPhone.classList.add("animate");
  else iPhone.classList.remove("animate");
});
