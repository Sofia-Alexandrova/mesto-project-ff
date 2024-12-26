import "./pages/index.css";
import { createCard, deleteCard, toggleLikeCard } from "./scripts/card.js";
import { openModal, closeModal, closeWithOverlay } from "./scripts/modal.js";
import { enableValidation, clearValidation } from "./scripts/validation.js";
import {
  getInitialCards,
  getProfile,
  postCard,
  patchProfile,
  patchAvatar,
  deleteFromServerCard,
  putLike,
  deleteLike,
} from "./scripts/api.js";
import { buttonTexts, validationConfig } from "./utils/constants.js";
import { renderLoading, handleSubmit } from "./utils/utils.js";

let cardIDForDeletion;
let eventForDeletion;
let ownerID;

const formElements = {
  editAvatar: {
    form: document.forms.edit_avatar,
    avatarInput: document.forms.edit_avatar.elements.avatar,
  },
  editProfile: {
    form: document.forms.edit_profile,
    nameInput: document.forms.edit_profile.elements.name,
    jobInput: document.forms.edit_profile.elements.description,
  },
  addCard: {
    form: document.forms.new_place,
    placeNameInput: document.forms.new_place.elements.place_name,
    linkInput: document.forms.new_place.elements.link,
  },
  confirmDeletion: {
    form: document.forms.confirm_deletion,
  },
};

const container = document.querySelector(".content");
const sectionPlaces = container.querySelector(".places");
const placesContainer = sectionPlaces.querySelector(".places__list");
const sectionProfile = container.querySelector(".profile");
const profileTitle = sectionProfile.querySelector(".profile__title");
const profileDescription = sectionProfile.querySelector(
  ".profile__description"
);
const profileImage = sectionProfile.querySelector(".profile__image");
const buttonAddCard = sectionProfile.querySelector(".profile__add-button");
const buttonEditProfile = sectionProfile.querySelector(".profile__edit-button");

const modalBigImage = document.querySelector(".popup_type_image");
const imgContainerModalBigImage = modalBigImage.querySelector(".popup__image");
const imgCaptionModalBigImage = modalBigImage.querySelector(".popup__caption");
const modalAddCard = document.querySelector(".popup_type_new-card");
const modalEditProfile = document.querySelector(".popup_type_edit");
const modalEditAvatar = document.querySelector(".popup_type_avatar");
const modalConfirmDeletion = document.querySelector(
  ".popup_type_confirm-deletion"
);

const deleteCardCallback = (event, cardID) => {
  openModal(modalConfirmDeletion);
  cardIDForDeletion = cardID;
  eventForDeletion = event;
};

const likeToggleCallback = (buttonLikeClicked, cardID, cardLikesNumber) => {
  const toggleLikeMethod = buttonLikeClicked.classList.contains(
    "card__like-button_is-active"
  )
    ? deleteLike
    : putLike;
  toggleLikeMethod(cardID)
    .then((res) => {
      toggleLikeCard(buttonLikeClicked);
      cardLikesNumber.textContent = res.likes.length;
    })
    .catch((err) => console.log(`Произошла ошибка: ${err}`));
};

function handleEditProfile(evt) {
  function makeRequest() {
    return patchProfile({
      name: formElements.editProfile.nameInput.value,
      about: formElements.editProfile.jobInput.value,
    }).then((res) => {
      profileTitle.textContent = res.name;
      profileDescription.textContent = res.about;
      formElements.editProfile.form.reset();
      closeModal(modalEditProfile);
    });
  }
  handleSubmit(makeRequest, evt, buttonTexts.saving);
}

function handleAddCard(evt) {
  function makeRequest() {
    return postCard({
      name: formElements.addCard.placeNameInput.value,
      link: formElements.addCard.linkInput.value,
    }).then((res) => {
      placesContainer.prepend(
        createCard(
          res,
          deleteCardCallback,
          likeToggleCallback,
          openImagePopup,
          ownerID
        )
      );
      formElements.addCard.form.reset();
      closeModal(modalAddCard);
    });
  }
  handleSubmit(makeRequest, evt, buttonTexts.saving);
}
function setAvatar(avatar) {
  profileImage.style.backgroundImage = `url(${avatar})`;
}

function handleEditAvatar(evt) {
  function makeRequest() {
    return patchAvatar({
      avatar: formElements.editAvatar.avatarInput.value,
    }).then((res) => {
      setAvatar(res.avatar);
      formElements.editAvatar.form.reset();
      closeModal(modalEditAvatar);
    });
  }

  handleSubmit(makeRequest, evt, buttonTexts.saving);
}

function handleConfirmDeletion(evt) {
  function makeRequest() {
    return deleteFromServerCard(cardIDForDeletion).then((res) => {
      deleteCard(eventForDeletion);
      console.log(res);
      closeModal(modalConfirmDeletion);
    });
  }

  handleSubmit(makeRequest, evt, buttonTexts.deletion);
}

function openImagePopup(src, alt) {
  imgContainerModalBigImage.src = src;
  imgContainerModalBigImage.alt = `Фотография ${alt}`; 
  imgCaptionModalBigImage.textContent = alt;
  openModal(modalBigImage);
}

Promise.all([getInitialCards(), getProfile()]).then(
  ([cardsData, profileData]) => {
    profileTitle.textContent = profileData.name;
    profileDescription.textContent = profileData.about;
    setAvatar(profileData.avatar);
    ownerID = profileData._id;
    cardsData.forEach(function (elem) {
      placesContainer.append(
        createCard(
          elem,
          deleteCardCallback,
          likeToggleCallback,
          openImagePopup,
          ownerID
        )
      );
    });
  }
);

enableValidation(validationConfig);

buttonEditProfile.addEventListener("click", () => {
  clearValidation(formElements.editProfile.form, validationConfig);
  formElements.editProfile.nameInput.value = profileTitle.textContent;
  formElements.editProfile.jobInput.value = profileDescription.textContent;
  openModal(modalEditProfile);
});
buttonAddCard.addEventListener("click", () => {
  clearValidation(formElements.addCard.form, validationConfig);
  formElements.addCard.form.reset();
  openModal(modalAddCard);
});
profileImage.addEventListener("click", () => {
  clearValidation(formElements.editAvatar.form, validationConfig);
  formElements.editAvatar.form.reset();
  openModal(modalEditAvatar);
});

formElements.addCard.form.addEventListener("submit", handleAddCard);
formElements.editProfile.form.addEventListener("submit", handleEditProfile);
formElements.editAvatar.form.addEventListener("submit", handleEditAvatar);
formElements.confirmDeletion.form.addEventListener(
  "submit",
  handleConfirmDeletion
);

[
  modalBigImage,
  modalAddCard,
  modalEditProfile,
  modalEditAvatar,
  modalConfirmDeletion,
].forEach((modal) => {
  modal
    .querySelector(".popup__close")
    .addEventListener("click", () => closeModal(modal));
  modal.addEventListener("click", closeWithOverlay);
});