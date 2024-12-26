const buttonTexts = {
  defaultSave: "Сохранить",
  defaultDelete: "Да",
  saving: "Сохранение...",
  deletion: "Удаление...",
};

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

export { buttonTexts, validationConfig };
