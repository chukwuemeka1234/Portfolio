const modal = document.querySelector('.nav-menu-link');

document.getElementById('menu').addEventListener('click', () => {
  modal.style.display = 'flex';
});

const close = document.getElementById('closeNav');
close.onclick = function () {
  modal.style.display = 'none';
};

const portfolio = document.getElementById('portfolioPage');
portfolio.onclick = function () {
    modal.style.display = 'none';
};

const about = document.getElementById('aboutPage');
about.onclick = function () {
    modal.style.display = 'none';
};

const contact = document.getElementById('contactPage');
contact.onclick = function () {
    modal.style.display = 'none';
}