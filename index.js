const toggleHam = document.querySelector("#toggleHam");
const hamMenu = document.querySelector("#hamMenu");
const toggleHamSvg = document.querySelector("#toggleHamSvg");

toggleHam.addEventListener("click", () => {
  hamMenu.classList.toggle("translate-x-full");

  if (hamMenu.classList.contains("translate-x-full")) {
    toggleHamSvg.src = "/assets/open-ham.svg";
  } else {
    toggleHamSvg.src = "/assets/close-ham.svg";
  }
});
