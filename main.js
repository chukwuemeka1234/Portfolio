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

// popup window
const myProjects = [

  {
    name: 'Tonic',
    description: `A daily selection of privately'personalized reads; no accounts or sign-ups
    required.`,
    featuredImage: './Image/SnapshootDesktopPortfolioA.svg',
    technology: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion: '#',
    sourceCode: '#',
  },

  {
    name: 'Multi-Post Stories',
    description: `Experimental content creation feature that allows users to add
    to an existing story over the course of a day without
    spamming their friends.`,
    featuredImage: './Image/SnapshootDesktopPortfolioB.svg',
    technology: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion: '#',
    sourceCode: '#',
  },

  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR',
    featuredImage: './Image/SnapshootDesktopPortfolioC.svg',
    technology: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion: '#',
    sourceCode: '#',
  },

  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featuredImage: './Image/SnapshootDesktopPortfolioD.svg',
    technology: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion: '#',
    sourceCode: '#',
  },
];

const seeProjectBtn = document.querySelectorAll('.popup-project');
seeProjectBtn.forEach((item, i) => {
  item.addEventListener('click', () => {
    const project = myProjects[i];
    const modalMenu = document.querySelector('.modal-container');
    const projectTitle = modalMenu.querySelector('.modal-card-title');
    projectTitle.textContent = project.name;
    const projectDesc = modalMenu.querySelectorAll('.modal-text-wrap');
    const [mobileDesc, desktopDesc] = projectDesc;
    mobileDesc.textContent = project.description;
    desktopDesc.textContent = project.description;
    projectDesc.textContent = project.description;
    const projectMobileImage = modalMenu.querySelector('.mobile-image');
    projectMobileImage.src = project.featuredImage;
    const projectDesktopImage = modalMenu.querySelector('.desktop-image');
    projectDesktopImage.src = project.featuredImage;
    const liveLink = document.querySelector('.live-link');
    liveLink.href = project.liveVersion;
    const liveSourceCode = document.querySelector('.source-code');
    liveSourceCode.href = project.sourceCode;
    const allTech = document.querySelectorAll('.modal-tag');
    allTech.forEach((item, i) => {
      item.textContent = project.technology[i];
    });

    modalMenu.style.display = 'flex';
  });
});

const modalCancelBtn = document.querySelector('#modal-close');
modalCancelBtn.addEventListener('click', () => {
  const removeModalContainer = document.querySelector('.modal-container');
  removeModalContainer.style.display = 'none';
});