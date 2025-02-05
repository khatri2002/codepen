const steps = document.querySelectorAll(".step");
const restartBtn = document.getElementById("restart-btn");

const animate = () => {
  restartBtn.classList.add("hide");
  let index = 0;
  const interval = setInterval(() => {
    if (index < steps.length) {
      steps[index].classList.add("active");
      index++;
    } else {
      clearInterval(interval);
      restartBtn.classList.remove("hide");
    }
  }, 1000);
};

restartBtn.addEventListener("click", () => {
  steps.forEach((step) => step.classList.remove("active"));
  animate();
});

animate();
