const ferramentasButton = document.querySelector('.ferramentas-button')
const ferramentasContent = document.querySelector('.ferramentas-content')
const ferramentasSeta = document.querySelector('.seta-ferramentas')

ferramentasButton.addEventListener('click', () => {
    ferramentasContent.classList.toggle('active');
    ferramentasSeta.classList.toggle('active');
})

const projetosButton = document.querySelector('.projetos-button')
const projetosContent = document.querySelector('.projetos-content')
const projetosSeta = document.querySelector('.seta-projetos')

projetosButton.addEventListener('click', () => {
    projetosContent.classList.toggle('active');
    projetosSeta.classList.toggle('active')
})

const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const navBackground = document.querySelector('.nav-background')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    navBackground.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
})