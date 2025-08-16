const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');
const intro = document.querySelector('.introductory');
const nugget = document.querySelector('.nugget-parent');
const doNotClick = document.querySelector('.clickable');
const grid = document.querySelector('.grid');
const themerParent = document.querySelector('.themes');
const gear = document.querySelector('.fa-gear');
const todoTheme = document.querySelector('.theme');
const html = document.querySelector('#html');
const nuggetArray = [
  'Welcome to my website 😇.',
  "well, don't forget to stay hydrated.",
  'Get some sleep 😴.',
  'You! yes, excercise and sweat.',
  "You are the best. Don't forget that.",
  'Eat healthy 😋🥦🍲.',
  'Smile 😎.',
  'Make someone happy today.',
  'Read a book 🤓.',
  'Try something new.',
  'Listen to music! 🎵.',
  "Call bae ❤️, it's perfect if you don't have one ✨.",
  'Stay Safe 😊✨.',
];

const textArray = [
  'ENIOLA OLADEJO',
  'a developer',
  'a student',
  'a freelancer',
];
const work = [
  {
    name: 'Rest country api',
    link: ' https://niol-show-projects.github.io/rest-country-api/',
    image: './images/rest-country-api-img.png',
    description:
      'This is a responsive website created with HTML, CSS, Vanilla JS and an API.',
    features: [
      'See all countries on the homepage',
      'Search for a country in the input field',
      'Filter countries by region',
      'Click on a country to see more detailed information on a separate page',
      'Toggle the color scheme between light and dark mode',
    ],
    repo: 'https://github.com/niol-show-projects/rest-country-api',
  },
  {
    name: 'Space expo',
    link: 'https://space-tourism-expo.netlify.app/',
    image: './images/space-expo-img.png',
    description:
      'This is a full fledged website on space tourism. It is built with React.JS, Swiper.JS and SASS. ',
    features: ['Responsive', 'Hover states', 'Slider effects'],
    repo: 'https://github.com/niol08/space-expo',
  },
  {
    name: 'Todo app',
    link: ' https://niol08.github.io/TODO__APP/',
    image: './images/todo-app-img.png',
    description:
      'This is a useful todo application created with HTML, CSS, Vanilla JS, Local storage API and a polyfill(to listen to drag events on mobile).',
    features: [
      'Responsive',
      'Add new todos to the list',
      'Mark todos as complete',
      'Toggle light and dark mode',
      "Todos doesn't delete on refresh",
      'Drag and drop to reorder items on the list',
      'Delete todos from the list',
      'Clear all completed todos',
      'Filter by all/active/complete todos',
    ],
    repo: 'https://github.com/niol08/TODO__APP',
  },
  {
    name: 'Order summary card',
    link: 'https://niol08.github.io/Order-summary-card-/',
    image: './images/order-summary-card-img.png',
    description: 'This is a simple project created with just HTML and SASS',
    features: ['Responsive', 'Hover states for interactive elements'],
    repo: 'https://github.com/niol08/Order-summary-card-',
  },
  {
    name: 'Advice generator',
    link: 'https://advice-gen-app-08.netlify.app/',
    image: './images/advice-gen-app-img.png',
    description:
      'This is an advice generator app created with React.JS, SASS, and an API. ',
    features: [
      'Responsive',
      'Hover states',
      'Generates new advice on clicking the die icon ',
    ],
    repo: 'https://github.com/niol08/advice-generator-app',
  },
  {
    name: 'Huddle landing page',
    link: 'https://niol08.github.io/huddle-landing-page/',
    image: './images/huddle-page-img.png',
    description:
      'This is a landing  page of an hypothetical website. It was built with just HTML and SASS',
    features: ['Responsve', 'Hover states', 'Curved background'],
    repo: 'https://github.com/niol08/huddle-landing-page',
  },
  {
    name: 'CLINICALC - A medical calculator web app',
    link: 'https://clinicalc.onrender.com/',
    image: './images/clinicalc.png',
    description:
      'This is a medical calculator web app that helps nurses calculate various medical values. It is built with Flask, Python, Gemini API, Bootstrap, CSS, and JavaScript.',
    features: [
      'Responsive',
      'Hover states',
      'Calculates various medical values',
      'Uses Gemini API to give insights into the values',
      'Uses Flask and Python for the backend',
      'Uses CSS and JavaScript for the frontend',
      'Uses Bootstrap for styling',
      'It has a section for unit conversion',
    ],
    repo: 'https://github.com/niol08/clinicalc',
  },
  {
    name: 'ML model',
    link: 'https://schizophrenia-ml-model-v1.onrender.com/',
    image: './images/schizophrenia-model.png',
    description:
      'This is a simple machine learning model that predicts schizophrenia in patients based on specific datasets. It is built with Streamlit, Python, and Scikit-learn, Matplotlib, Pandas, and NumPy.',
    features: [
      'Responsive',
      'Predicts schizophrenia based on datasets',
      'Uses Random Forest algorithm',
      'Interactive UI with Streamlit',
    ],
    repo: 'https://github.com/niol08/schizophrenia-ML-model',
  },
  {
    name: 'Fintrack - A finance tracking web app',
    link: 'https://fin-track-test.vercel.app/dashboard/',
    image: './images/fintrack.png',
    description: 'This is a test I did for junior frontend developer role',
    features: [
      'Responsive',
      'Hover states',
      'Uses Next.js, tailwindcss, shadcn/ui and framer-motion',
    ],
    repo: 'https://github.com/niol08/Fin-track-test',
  },
  {
    name: 'Bio-signal Chatbot',
    link: 'https://bio-signal-chatbot.streamlit.app/',
    image: './images/bio-signal.png',
    description:
      'This is a streamlit app for bio-signal analysis, you can upload bio-signal data and get insights from it. You can test up to 4 different bio-signals: EMG (electromyography), VAG (vibroathrography), ECG (electrocardiogram), and PNG (phonocardiogram). Some of the features are built on pre-trained models.',
    features: [
      'Responsive',
      'AI insights',
      'Multiple bio-signals',
      'intuitive and easy to use',
    ],
    repo: 'https://github.com/niol08/Bio-signal-chatbot',
  },
  {
    name: 'Medical Imaging Chatbot',
    link: 'https://medical-imaging-chatbot.streamlit.app/',
    image: './images/medical-imaging.png',
    description:
      'This is a streamlit app for medical imaging analysis, you can upload medical imaging data and get insights from it. It is built on pre-trained models.',
    features: [
      'Responsive',
      'AI insights',
      'Multiple medical imaging techniques',
      'intuitive and easy to use',
    ],
    repo: 'https://github.com/niol08/Medical-imaging-chatbot',
  },
];
const fontThemes = [
  { name: 'aquamarine', hex: 'aquamarine' },
  { name: 'light-coral', hex: '#f08080' },
  { name: 'lime', hex: '#32cd32' },
  { name: 'gold', hex: '#ffd700' },
];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

const portfolio = () => {
  work.forEach((item) => {
    const { name, description, features, repo, link, image } = item;
    const element = document.createElement('div');
    element.classList.add('card');
    element.innerHTML = `<figure class="img-parent">
                <img src="${image}" alt="${name}-screenshot" />
              </figure>
              <h3 class="name">${name}</h3>
              <div class="desc">${description}</div>
              <div>
              <div class="feature-txt">Features</div>
              <ul class="features"></ul>
              </div>
              <div class="links"><a href="${link}">visit website</a><a href="${repo}">check repo</a></div>`;
    const newElement = element.querySelector('.features');
    features.forEach((item) => {
      const element = document.createElement('li');
      element.innerText = item;
      newElement.append(element);
    });
    grid.append(element);
  });
};

const displayNugget = () => {
  let max = nuggetArray.length;
  let arrIndex = Math.floor(Math.random() * max);
  // nugget.textContent = nuggetArray[arrIndex]
  let newArr = nuggetArray.map((item) => {
    return `<div class="item">${item}</div>`;
  });
  nugget.innerHTML = newArr[arrIndex];
  nugget.classList.add('nuggets');
  doNotClick.disabled = true;
  const item = document.querySelector('.item');

  setTimeout(() => {
    nugget.removeChild(item);
    nugget.classList.remove('nuggets');
    doNotClick.disabled = false;
    doNotClick.innerText = `Now click again 😇`;
  }, 3000);
};
const type = () => {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing'))
      // typedTextSpan.style.color = fontColor[textArrayIndex]
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
};

const erase = () => {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
};

const themeSwitcher = (name) => {
  html.className = name;
  localStorage.setItem('color', JSON.stringify(name));
};
const setFontColor = () => {
  let item = JSON.parse(localStorage.getItem('color'));
  try {
    if (item) {
      html.className = item;
    }
  } catch (error) {
    return;
  }
};
const createThemes = () => {
  fontThemes.forEach((item) => {
    const { hex, name } = item;
    const element = document.createElement('div');
    element.classList.add('themer');
    element.style.background = hex;
    themerParent.append(element);
    element.addEventListener('click', () => {
      themeSwitcher(name);
    });
  });
};
let flag = true;
const toggleTranslate = () => {
  if (flag) {
    todoTheme.classList.remove('translate');
    flag = false;
  } else if (!flag) {
    todoTheme.classList.add('translate');
    flag = true;
  }
};
// ####### Event listeners #######
document.addEventListener('DOMContentLoaded', () => {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
doNotClick.addEventListener('click', displayNugget);
document.addEventListener('DOMContentLoaded', portfolio);
document.addEventListener('DOMContentLoaded', createThemes);
document.addEventListener('DOMContentLoaded', setFontColor);
gear.addEventListener('click', toggleTranslate);
