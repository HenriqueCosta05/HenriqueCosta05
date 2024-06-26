/* Parte 1: Ícone de fechar a barra de navegação */
let iconeMenu = document.querySelector('#icone-menu');
let barraNavegacao = document.querySelector('.navbar');

iconeMenu.onclick = () => { //Sintaxe para uma função anônima.
    iconeMenu.classList.toggle('bx-x');
    barraNavegacao.classList.toggle('active');
};

/* Parte 2: Mudando a cor do link ativo no cabeçalho */
let secoes = document.querySelectorAll('section');
let linksNavegacao = document.querySelectorAll('header nav a');

window.onscroll = () => { 
    secoes.forEach(sec => {
        let topo = window.scrollY;
        let distanciaTopo = sec.offsetTop - 150;
        let altura = sec.offsetHeight;
        let id = sec.getAttribute('id');

        //Estruturas condicionais para verificação do item ativo.
        if ((topo >= distanciaTopo) && (topo < distanciaTopo + altura)) {
            linksNavegacao.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /* Parte 3: Cabeçalho fixo */

    let cabecalho = document.querySelector('header');
    
    cabecalho.classList.toggle('fixo', window.scrollY > 100);

    /* Removendo a barra de navegação mobile quando um link for clicado. */
    iconeMenu.classList.remove('bx-x');
    barraNavegacao.classList.remove('active');

};

/* Parte 5: Scroll Reveal - Biblioteca */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.conteudo-inicio, .titulo', { origin: 'top' });
ScrollReveal().reveal('.imagem-inicio, .experiencias-container, .portfolio-box, .contato form', { origin: 'bottom' });
ScrollReveal().reveal('.conteudo-inicio h1, .imagem-sobre', { origin: 'left' });
ScrollReveal().reveal('.conteudo-inicio p, .conteudo-sobre', { origin: 'right' });

/* Parte 6: Typed.js - Biblioteca */
const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor Full-Stack', 'Violonista', 'Apaixonado por Tecnologia'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});