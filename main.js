const modal = document.querySelector('.nav-menu-link');

document.getElementById('menu').addEventListener('click', () => {
  modal.style.width = '100%';
});

const close = document.getElementById('close-Icon');
close.onclick = function () {
  modal.style.width = '0';
};

const portfolio = document.getElementById('portfolioPage');
portfolio.onclick = function () {
  modal.style.width = '0';
};

const about = document.getElementById('aboutPage');
about.onclick = function () {
  modal.style.width = '0';
};

const contact = document.getElementById('contactPage');
contact.onclick = function () {
  modal.style.width = '0';
};


