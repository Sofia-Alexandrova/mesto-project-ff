(()=>{"use strict";function e(e,t,n,r,o){var a=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),c=a.querySelector(".card__image"),i=a.querySelector(".card__delete-button"),u=a.querySelector(".card__like-button"),l=a.querySelector(".card__number-of-likes"),s=e.name,d=e._id;return e.likes.some((function(e){return e._id===o}))&&u.classList.toggle("card__like-button_is-active"),e.owner._id!==o&&i.remove(),c.src=e.link,c.alt=s,a.querySelector(".card__title").textContent=s,l.textContent=e.likes.length,i.addEventListener("click",(function(e){return t(e,d)})),u.addEventListener("click",(function(e){return n(e.target,d,l)})),c.addEventListener("click",(function(){return r(c.src,c.alt)})),a}function t(e){e.classList.add("popup_is-animated"),setTimeout((function(){e.classList.add("popup_is-opened")}),1),document.addEventListener("keydown",r)}function n(e){e.classList.remove("popup_is-opened"),e.classList.remove("popup_is-animated"),document.removeEventListener("keydown",r)}function r(e){if("Escape"===e.code){var t=document.querySelector(".popup_is-opened");t&&n(t)}}function o(e){e.target===e.currentTarget&&n(e.target)}function a(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){c(e,n,t)})),u(r,t)}function c(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}function i(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?function(e,t){e.classList.remove(t.inactiveButtonClass),e.disabled=!1}(t,n):u(t,n)}function u(e,t){e.classList.add(t.inactiveButtonClass),e.disabled=!0}var l,s,d,f={baseUrl:"https://nomoreparties.co/v1/cohort-mag-4",headers:{authorization:"7b3b40c1-fcdf-4f3b-8e1d-d0f70c3c0aaf","Content-Type":"application/json"}},p=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},m=function(e){return fetch("".concat(f.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:f.headers}).then(p)},v=function(e){return fetch("".concat(f.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:f.headers}).then(p)},_="Сохранение...",h={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};function y(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранить",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Сохранение...";t.textContent=e?r:n}function b(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";t.preventDefault();var r=t.submitter,o=r.textContent;y(!0,r,o,n),e().catch((function(e){console.error("Ошибка: ".concat(e))})).finally((function(){y(!1,r,o)}))}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var g={editAvatar:{form:document.forms.edit_avatar,avatarInput:document.forms.edit_avatar.elements.avatar},editProfile:{form:document.forms.edit_profile,nameInput:document.forms.edit_profile.elements.name,jobInput:document.forms.edit_profile.elements.description},addCard:{form:document.forms.new_place,placeNameInput:document.forms.new_place.elements.place_name,linkInput:document.forms.new_place.elements.link},confirmDeletion:{form:document.forms.confirm_deletion}},C=document.querySelector(".content"),q=C.querySelector(".places").querySelector(".places__list"),E=C.querySelector(".profile"),L=E.querySelector(".profile__title"),k=E.querySelector(".profile__description"),A=E.querySelector(".profile__image"),I=E.querySelector(".profile__add-button"),x=E.querySelector(".profile__edit-button"),P=document.querySelector(".popup_type_image"),U=P.querySelector(".popup__image"),j=P.querySelector(".popup__caption"),w=document.querySelector(".popup_type_new-card"),T=document.querySelector(".popup_type_edit"),O=document.querySelector(".popup_type_avatar"),B=document.querySelector(".popup_type_confirm-deletion"),N=function(e,n){t(B),l=n,s=e},D=function(e,t,n){(e.classList.contains("card__like-button_is-active")?v:m)(t).then((function(t){e.classList.toggle("card__like-button_is-active"),n.textContent=t.likes.length})).catch((function(e){return console.log("Произошла ошибка: ".concat(e))}))};function J(e){A.style.backgroundImage="url(".concat(e,")")}function H(e,n){U.src=e,U.alt="Фотография ".concat(n),j.textContent=n,t(P)}Promise.all([fetch("".concat(f.baseUrl,"/cards"),{headers:f.headers}).then(p),fetch("".concat(f.baseUrl,"/users/me"),{headers:f.headers}).then(p)]).then((function(t){var n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,c,i=[],u=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw o}}return i}}(n,r)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],c=o[1];L.textContent=c.name,k.textContent=c.about,J(c.avatar),d=c._id,a.forEach((function(t){q.append(e(t,N,D,H,d))}))})).catch((function(e){console.error("Ошибка при загрузке данных: ".concat(e))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);i(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?c(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),i(n,r,t)}))}))}(t,e)}))}(h),x.addEventListener("click",(function(){console.log("Клик на кнопку редактировать профиль"),a(g.editProfile.form,h),g.editProfile.nameInput.value=L.textContent,g.editProfile.jobInput.value=k.textContent,t(T)})),I.addEventListener("click",(function(){console.log("Клик на кнопку добавления карточки"),a(g.addCard.form,h),g.addCard.form.reset(),t(w)})),A.addEventListener("click",(function(){console.log("Клик на редактирования аватара"),a(g.editAvatar.form,h),g.editAvatar.form.reset(),t(O)})),g.addCard.form.addEventListener("submit",(function(t){b((function(){return(t={name:g.addCard.placeNameInput.value,link:g.addCard.linkInput.value},fetch("".concat(f.baseUrl,"/cards"),{method:"POST",headers:f.headers,body:JSON.stringify(t)}).then(p)).then((function(t){q.prepend(e(t,N,D,H,d)),g.addCard.form.reset(),n(w)}));var t}),t,_)})),g.editProfile.form.addEventListener("submit",(function(e){b((function(){return(e={name:g.editProfile.nameInput.value,about:g.editProfile.jobInput.value},fetch("".concat(f.baseUrl,"/users/me"),{method:"PATCH",headers:f.headers,body:JSON.stringify(e)}).then(p)).then((function(e){L.textContent=e.name,k.textContent=e.about,g.editProfile.form.reset(),n(T)}));var e}),e,_)})),g.editAvatar.form.addEventListener("submit",(function(e){b((function(){return(e={avatar:g.editAvatar.avatarInput.value},fetch("".concat(f.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:f.headers,body:JSON.stringify(e)}).then(p)).then((function(e){J(e.avatar),g.editAvatar.form.reset(),n(O)}));var e}),e,_)})),g.confirmDeletion.form.addEventListener("submit",(function(e){b((function(){return(e=l,fetch("".concat(f.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:f.headers}).then(p)).then((function(e){s.target.closest(".places__item").remove(),console.log(e),n(B)}));var e}),e,"Удаление...")})),[P,w,T,O,B].forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(){return n(e)})),e.addEventListener("click",o)}))})();