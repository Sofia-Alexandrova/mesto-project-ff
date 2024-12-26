function openModal(popup) {
  popup.classList.add("popup_is-animated");
  setTimeout(() => {
    popup.classList.add("popup_is-opened");
  }, 1);
  document.addEventListener("keydown", closeWithEscape);
}

function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
  popup.classList.remove("popup_is-animated");
  document.removeEventListener("keydown", closeWithEscape);
}

function closeWithEscape(event) {
  if (event.code === "Escape") {
    const openPopup = document.querySelector(".popup_is-opened");
    if (openPopup) {
      closeModal(openPopup);
    }
  }
}

function closeWithOverlay(event) {
  if (event.target === event.currentTarget) {
    closeModal(event.target);
  }
}

export { openModal, closeModal, closeWithOverlay };
