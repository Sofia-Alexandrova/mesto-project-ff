(()=>{"use strict";function e(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",r)}function t(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",r)}function r(e){if("Escape"===e.key){var r=document.querySelector(".popup_is-opened");r&&t(r)}}function n(e,t,r,n,o,c){var a=e.cloneNode(!0),u=a.querySelector(".card__image"),i=a.querySelector(".card__title"),l=a.querySelector(".card__delete-button"),s=a.querySelector(".card__like-button"),d=a.querySelector(".card__like-counter");return u.src=t.link,u.alt=t.alt,i.textContent=t.name,d.textContent=t.likes.length,t.likes.some((function(e){return e._id===c}))&&s.classList.add("card__like-button_is-active"),t.owner._id!==c?l.remove():l.addEventListener("click",(function(){return r(a,t)})),s.addEventListener("click",(function(){return n(a,t)})),u.addEventListener("click",(function(){return o(a,t)})),a}function o(e,t){e.remove()}var c=function(e,t,r){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(r.disabled=!1,r.classList.remove(t.inactiveButtonClass)):(r.disabled=!0,r.classList.add(t.inactiveButtonClass))},a=function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));n&&(t.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent="")},u=function(e,t){var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);r.forEach((function(r){a(e,r,t)})),c(r,t,n)},i={baseUrl:"https://nomoreparties.co/v1/cohort-mag-4",headers:{authorization:"7b3b40c1-fcdf-4f3b-8e1d-d0f70c3c0aaf","Content-Type":"application/json"}},l=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},s=function(e){return fetch("".concat(i.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:i.headers}).then(l)},d=function(e,t){return fetch("".concat(i.baseUrl,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:i.headers}).then(l)};function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var p=document.querySelector("#card-template").content.querySelector(".card"),m=document.querySelector(".elements"),_=document.querySelector(".popup_type_edit"),v=document.querySelector('.popup__form[name="edit-profile"]'),y=v.querySelector("#name"),h=v.querySelector("#description"),S=document.querySelector(".profile__edit-button"),b=document.querySelector(".profile__title"),q=document.querySelector(".profile__subtitle"),E=document.querySelector(".popup_type_new-card"),k=document.querySelector('.popup__form[name="new-place"]'),L=k.querySelector("#place-name"),C=k.querySelector("#link"),g=document.querySelector(".profile__add-button"),A=document.querySelector(".popup_type_image"),x=A.querySelector(".popup__caption"),T=A.querySelector(".popup__image"),U=document.querySelectorAll(".popup"),w=document.querySelector(".popup_type_avatar"),j=document.querySelector('.popup__form[name="edit-avatar"]'),O=j.querySelector("#avatar-link"),B=document.querySelector(".profile__avatar"),P=document.querySelector(".profile__avatar-edit"),D=null,M={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);c(r,t,n),r.forEach((function(o){o.addEventListener("input",(function(){c(r,t,n),function(e,t,r){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?a(e,t,r):function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),n.textContent=t.validationMessage,n.classList.add(r.errorClass)}(e,t,r)}(e,o,t)}))}))}(t,e)}))}(M);var N=function(e){e.target.classList.contains("popup_is-opened")&&t(e.target)},I=function(e){t(e.target.closest(".popup"))};U.forEach((function(e){e.addEventListener("click",N);var t=e.querySelector(".popup__close");t&&t.addEventListener("click",I)}));var J=function(t){x.textContent=t.name,T.src=t.link,T.alt=t.alt,e(A)},G=function(e,t){!function(e,t,r){var n=e.querySelector(".card__like-counter"),o=e.querySelector(".card__like-button"),c=o.classList.contains("card__like-button_is-active");r(t._id,c).then((function(e){e&&(o.classList.toggle("card__like-button_is-active"),n.textContent=e.likes.length)})).catch((function(e){console.error("Ошибка при изменении лайка: ".concat(e))}))}(e,t,d)};Promise.all([fetch("".concat(i.baseUrl,"/users/me"),{method:"GET",headers:i.headers}).then(l),fetch("".concat(i.baseUrl,"/cards"),{method:"GET",headers:i.headers}).then(l)]).then((function(e){var t,r,c=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c,a,u=[],i=!0,l=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=c.call(r)).done)&&(u.push(n.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,r)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=c[0],u=c[1];D=a._id,B.src=a.avatar,b.textContent=a.name,q.textContent=a.about,u.forEach((function(e){var t=n(p,e,(function(e,t){s(t._id).then((function(){o(e)})).catch((function(e){console.error(e)}))}),G,(function(){return J(e)}),D);m.append(t)}))})).catch((function(e){return console.error(e)})),S.addEventListener("click",(function(){u(v,M),y.value=b.textContent,h.value=q.textContent,e(_)})),g.addEventListener("click",(function(){u(k,M),e(E)})),v.addEventListener("submit",(function(e){var r,n;e.preventDefault(),(r=y.value,n=h.value,fetch("".concat(i.baseUrl,"/users/me"),{method:"PATCH",headers:i.headers,body:JSON.stringify({name:r,about:n})}).then(l)).then((function(e){b.textContent=e.name,q.textContent=e.about,t(_)})).catch((function(e){console.error("Ошибка при редактировании профиля:",e)}))})),k.addEventListener("submit",(function(e){var r,c;e.preventDefault(),(r=L.value,c=C.value,fetch("".concat(i.baseUrl,"/cards"),{method:"POST",headers:i.headers,body:JSON.stringify({name:r,link:c})}).then(l)).then((function(e){var r=n(p,e,(function(e,t){s(t._id).then((function(){o(e)})).catch((function(e){console.error(e)}))}),G,(function(){return J(e)}),D);m.prepend(r),t(E),k.reset(),u(k,M)})).catch((function(e){console.error("Ошибка при добавлении карточки:",e)}))})),P.addEventListener("click",(function(){u(j,M),e(w)})),j.addEventListener("submit",(function(e){var r;e.preventDefault(),(r=O.value,fetch("".concat(i.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:i.headers,body:JSON.stringify({avatar:r})}).then(l)).then((function(e){B.src=e.avatar,t(w),j.reset(),u(j,M)})).catch((function(e){console.error(e)}))}))})();