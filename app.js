'use strict';

const switcher = document.querySelector('.botao');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('tema-escuro');
    document.body.classList.toggle('tema-claro');

    if (document.body.classList.contains('tema-claro')) {
        this.textContent = "Escuro";
    } else {
        this.textContent = "Claro";
    }
});