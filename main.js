(()=>{var e={763:()=>{}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}(()=>{"use strict";function e(e,t,n,r,o){var a=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),c=a.querySelector(".card__image"),i=a.querySelector(".card__delete-button"),u=a.querySelector(".card__like-button"),l=a.querySelector(".card__number-of-likes"),d=e.name,s=e._id;return e.likes.some((function(e){return e._id===o}))&&u.classList.toggle("card__like-button_is-active"),e.owner._id!==o&&i.remove(),c.src=e.link,c.alt=d,a.querySelector(".card__title").textContent=d,l.textContent=e.likes.length,i.addEventListener("click",(function(e){return t(e,s)})),u.addEventListener("click",(function(e){return n(e.target,s,l)})),c.addEventListener("click",(function(){return r(c.src,c.alt)})),a}function t(e){e.classList.add("popup_is-animated"),setTimeout((function(){e.classList.add("popup_is-opened")}),1),document.addEventListener("keydown",o)}function r(e){e.classList.remove("popup_is-opened"),e.classList.remove("popup_is-animated"),document.removeEventListener("keydown",o)}function o(e){if("Escape"===e.code){var t=document.querySelector(".popup_is-opened");t&&r(t)}}function a(e){e.target===e.currentTarget&&r(e.target)}var c,i,u,l=n(763),d={baseUrl:"https://nomoreparties.co/v1/cohort-mag-4",headers:{authorization:"7b3b40c1-fcdf-4f3b-8e1d-d0f70c3c0aaf","Content-Type":"application/json"}},s=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},f=function(e){return fetch("".concat(d.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:d.headers}).then(s)},p=function(e){return fetch("".concat(d.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:d.headers}).then(s)},m="Сохранение...",_={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};function v(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранить",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Сохранение...";t.textContent=e?r:n}function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";t.preventDefault();var r=t.submitter,o=r.textContent;v(!0,r,o,n),e().catch((function(e){console.error("Ошибка: ".concat(e))})).finally((function(){v(!1,r,o)}))}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var b={editAvatar:{form:document.forms.edit_avatar,avatarInput:document.forms.edit_avatar.elements.avatar},editProfile:{form:document.forms.edit_profile,nameInput:document.forms.edit_profile.elements.name,jobInput:document.forms.edit_profile.elements.description},addCard:{form:document.forms.new_place,placeNameInput:document.forms.new_place.elements.place_name,linkInput:document.forms.new_place.elements.link},confirmDeletion:{form:document.forms.confirm_deletion}},S=document.querySelector(".content"),g=S.querySelector(".places").querySelector(".places__list"),k=S.querySelector(".profile"),C=k.querySelector(".profile__title"),q=k.querySelector(".profile__description"),E=k.querySelector(".profile__image"),L=k.querySelector(".profile__add-button"),x=k.querySelector(".profile__edit-button"),I=document.querySelector(".popup_type_image"),A=I.querySelector(".popup__image"),P=I.querySelector(".popup__caption"),U=document.querySelector(".popup_type_new-card"),j=document.querySelector(".popup_type_edit"),w=document.querySelector(".popup_type_avatar"),T=document.querySelector(".popup_type_confirm-deletion"),O=function(e,n){t(T),c=n,i=e},N=function(e,t,n){(e.classList.contains("card__like-button_is-active")?p:f)(t).then((function(t){e.classList.toggle("card__like-button_is-active"),n.textContent=t.likes.length})).catch((function(e){return console.log("Произошла ошибка: ".concat(e))}))};function D(e){E.style.backgroundImage="url(".concat(e,")")}function V(e,n){A.src=e,A.alt="Фотография ".concat(n),P.textContent=n,t(I)}Promise.all([fetch("".concat(d.baseUrl,"/cards"),{headers:d.headers}).then(s),fetch("".concat(d.baseUrl,"/users/me"),{headers:d.headers}).then(s)]).then((function(t){var n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,c,i=[],u=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw o}}return i}}(n,r)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],c=o[1];C.textContent=c.name,q.textContent=c.about,D(c.avatar),u=c._id,a.forEach((function(t){g.append(e(t,O,N,V,u))}))})).catch((function(e){console.error("Ошибка при загрузке данных: ".concat(e))})),(0,l.enableValidation)(_),x.addEventListener("click",(function(){console.log("Клик на кнопку редактировать профиль"),(0,l.clearValidation)(b.editProfile.form,_),b.editProfile.nameInput.value=C.textContent,b.editProfile.jobInput.value=q.textContent,t(j)})),L.addEventListener("click",(function(){console.log("Клик на кнопку добавления карточки"),(0,l.clearValidation)(b.addCard.form,_),b.addCard.form.reset(),t(U)})),E.addEventListener("click",(function(){console.log("Клик на редактирования аватара"),(0,l.clearValidation)(b.editAvatar.form,_),b.editAvatar.form.reset(),t(w)})),b.addCard.form.addEventListener("submit",(function(t){h((function(){return(t={name:b.addCard.placeNameInput.value,link:b.addCard.linkInput.value},fetch("".concat(d.baseUrl,"/cards"),{method:"POST",headers:d.headers,body:JSON.stringify(t)}).then(s)).then((function(t){g.prepend(e(t,O,N,V,u)),b.addCard.form.reset(),r(U)}));var t}),t,m)})),b.editProfile.form.addEventListener("submit",(function(e){h((function(){return(e={name:b.editProfile.nameInput.value,about:b.editProfile.jobInput.value},fetch("".concat(d.baseUrl,"/users/me"),{method:"PATCH",headers:d.headers,body:JSON.stringify(e)}).then(s)).then((function(e){C.textContent=e.name,q.textContent=e.about,b.editProfile.form.reset(),r(j)}));var e}),e,m)})),b.editAvatar.form.addEventListener("submit",(function(e){h((function(){return(e={avatar:b.editAvatar.avatarInput.value},fetch("".concat(d.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:d.headers,body:JSON.stringify(e)}).then(s)).then((function(e){D(e.avatar),b.editAvatar.form.reset(),r(w)}));var e}),e,m)})),b.confirmDeletion.form.addEventListener("submit",(function(e){h((function(){return(e=c,fetch("".concat(d.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:d.headers}).then(s)).then((function(e){i.target.closest(".places__item").remove(),console.log(e),r(T)}));var e}),e,"Удаление...")})),[I,U,j,w,T].forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(){return r(e)})),e.addEventListener("click",a)}))})()})();