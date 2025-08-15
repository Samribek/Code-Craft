const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');

let currentActiveCard = 0;
const cardsEl = [];

let cardsData = getCardsData();

if (!cardsData.length) {
  cardsData = [
    { question: 'What is your name?', answer: 'Samra' },
    { question: 'How old are you?', answer: '20' },
    { question: 'Where do you live?', answer: 'Ethiopia' }
  ];
  setCardsData(cardsData);
}


function createCards() {
  cardsContainer.innerHTML = '';
  cardsEl.length = 0;
  cardsData.forEach((data, index) => createCard(data, index));
  updateCurrentText();
}

function createCard(data, index) {
  const card = document.createElement('div');
  card.classList.add('card');
  if (index === 0) card.classList.add('active');

  card.innerHTML = `
    <div class="inner-card">
      <div class="inner-card-front">
        <p>${data.question}</p>
      </div>
      <div class="inner-card-back">
        <p>${data.answer}</p>
      </div>
    </div>
  `;

  card.addEventListener('click', () => card.classList.toggle('show-answer'));

  cardsEl.push(card);
  cardsContainer.appendChild(card);
}

function updateCurrentText() {
  currentEl.innerText = cardsEl.length
    ? `${currentActiveCard + 1}/${cardsEl.length}`
    : '0/0';
}


function getCardsData() {
  const cards = localStorage.getItem('memoryCards');
  return cards ? JSON.parse(cards) : [];
}

function setCardsData(cards) {
  localStorage.setItem('memoryCards', JSON.stringify(cards));
}

nextBtn.addEventListener('click', () => {
  if (!cardsEl.length) return;
  cardsEl[currentActiveCard].className = 'card left';
  currentActiveCard = (currentActiveCard + 1) % cardsEl.length;
  cardsEl[currentActiveCard].className = 'card active';
  updateCurrentText();
});

prevBtn.addEventListener('click', () => {
  if (!cardsEl.length) return;
  cardsEl[currentActiveCard].className = 'card right';
  currentActiveCard =
    (currentActiveCard - 1 + cardsEl.length) % cardsEl.length;
  cardsEl[currentActiveCard].className = 'card active';
  updateCurrentText();
});
showBtn.addEventListener('click', () => addContainer.classList.add('show'));

addCardBtn.addEventListener('click', () => {
  const question = questionEl.value.trim();
  const answer = answerEl.value.trim();

  if (question && answer) {
    const newCard = { question, answer };
    cardsData.push(newCard);
    setCardsData(cardsData);
    createCards();
    addContainer.classList.remove('show');
    questionEl.value = '';
    answerEl.value = '';
    currentActiveCard = cardsEl.length - 1;
    updateCurrentText();
  }
});


clearBtn.addEventListener('click', () => {
  localStorage.removeItem('memoryCards');
  cardsData = [];
  createCards();
  updateCurrentText();
});

createCards();