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

// Validate form
const email = document.getElementById('email');
const form = document.querySelector('#form-contact');

form.addEventListener('submit', (e) => {
  const emailinput = email.value;
  const errorEmail = document.querySelector('.error-message');
  if (emailinput.toLowerCase() !== emailinput) {
    e.preventDefault();
    errorEmail.innerText = 'Error: please enter lower-case email address';
  } else {
    errorEmail.style.display = 'none';
  }
});

// Storage
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
    // everything except Firefox
      e.code === 22
            // Firefox
            || e.code === 1014
            // test name field too, because code might not be present
            // everything except Firefox
            || e.name === 'QuotaExceededError'
            // Firefox
            || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
            // acknowledge QuotaExceededError only if there's something already stored
            && (storage && storage.length !== 0);
  }
}

if (storageAvailable('localStorage')) {
  let formDetails = { name: '', email: '', message: '' };
  if (window.localStorage.getItem('profile')) {
    const getProfile = window.localStorage.getItem('profile');
    formDetails = JSON.parse(getProfile);
    form.username.value = formDetails.name;
    form.email.value = formDetails.email;
    form.message.value = formDetails.message;
  }

  form.addEventListener('input', () => {
    formDetails.name = form.username.value;
    formDetails.email = form.email.value;
    formDetails.message = form.message.value;
    window.localStorage.setItem('profile', JSON.stringify(formDetails));
  });
}