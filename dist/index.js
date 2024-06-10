"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('modal');
    var modalBody = document.getElementById('modal-body');
    var openModalButton = document.querySelector('.demo-block__button');
    var closeButton = document.querySelector('.modal__close-button');
    if (!modal || !modalBody || !openModalButton || !closeButton) {
        console.error('Не удалось найти один или несколько элементов');
        return;
    }
    openModalButton.addEventListener('click', function () {
        modalBody.innerHTML = "\n            <h2 id=\"modal-title\">\u0412\u0445\u043E\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443</h2>\n            \n            <input type=\"text\" id=\"email\" name=\"email\" aria-required=\"true\" placeholder='Email/\u0422\u0435\u043B\u0435\u0444\u043E\u043D'>\n            \n            <input type=\"password\" id=\"password\" name=\"password\" aria-required=\"true\" placeholder='\u041F\u0430\u0440\u043E\u043B\u044C'>\n            <div class=\"checkbox\">\n                <input type=\"checkbox\" id=\"remember-me\">\n                <label for=\"remember-me\">\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C</label>\n            </div>\n            <a class=\"button button--secondary\">\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C</a>\n            <button class=\"button button--logIn\">\u0412\u043E\u0439\u0442\u0438</button>\n            <button class=\"button button--signUp\">\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F</button>\n        ";
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
    });
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    });
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
        }
    });
});
