document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    

    for (let i = 0; i < buttons.length; i++ ) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeAba();
            aba.classList.add('shows__list--is-active');
            removeBottun();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }
})

function removeBottun() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i=0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeAba() {
    const tabsConteiner = document.querySelectorAll('[data-tab-id]');

    for (let i=0; i < tabsConteiner.length; i++) {
        tabsConteiner[i].classList.remove('shows__list--is-active');
    }
}