"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");

const closeModalFunction = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModalFunction = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].onclick = openModalFunction;
}

closeModal.onclick = closeModalFunction;

overlay.onclick = closeModalFunction;

document.onkeydown = (event) => {
  if (event.key === "Escape") {
    closeModalFunction();
  }
};
