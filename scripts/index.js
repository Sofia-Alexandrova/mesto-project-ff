// @todo: Темплейт карточки
    const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
    const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
    function createCardElement(cardData, onDelete) { 
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    cardElement.querySelector('.card__image').src = cardData.link;
    cardElement.querySelector('.card__image').alt = cardData.name;
    cardElement.querySelector('.card__title').textContent = cardData.name;

    
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);
    return cardElement;
    };

// @todo: Функция удаления карточки
    function deleteCard(event) {
    const itemToDelete = event.target.closest('.places__item');
    itemToDelete.remove();
    }

// @todo: Вывести карточки на страницу
    initialCards.forEach(cardData => {
    const cardElement = createCardElement(cardData, deleteCard);
    placesList.append(cardElement);
});
    