// e.target vs e.currentTarget
// e.target.dataset.id  ex) history, vision, goals
// document.getElementById(e.target.dataset.id)
// remove all 'active' class if (id)
// why? need to be only 'active' when clicking
// remove() -> add()

const about = document.querySelector(".about");
const tabButtons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  const clickedId = document.getElementById(id);

  if (id) {
    // buttons
    tabButtons.forEach((button) => {
      button.classList.remove("active");
      e.target.classList.add("active");
    });

    // contents
    contents.forEach((content) => {
      content.classList.remove("active");
    });

    clickedId.classList.add("active");
  }
});
