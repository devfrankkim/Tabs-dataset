```js
// e.target(bubbling-access) vs e.currentTarget
// e.target.dataset.id  ex) history, vision, goals

// remove all 'active' class if (id)
// why? need to be only 'active' when clicking

// everything.remove('active')
// clicked.add('active')

// forEach iterates everything.

/*
NodeList can't remove() 
ex)  tabButtons.classList.remove("active");

Need to use forEach, so that you can iterate and remove()
*/

const about = document.querySelector(".about");
const tabButtons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");



about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  const clickedId = document.getElementById(id);


  // Other parts will also remove(), add() 
  // need to have condition inside (id)

  //   tabButtons.forEach((button) => {
  //     button.classList.remove("active");
  //     e.target.classList.add("active");
  //   });

//  ========= solution =========
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

    // Need to add('active') to the clicked button(e.target)
    // clickedId = document.getElementById(e.target.dataset.id)
    clickedId.classList.add("active");
  }
});

```