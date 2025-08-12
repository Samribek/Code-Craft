const balance = document.getElementById('balance');
const incomes = document.getElementById('money-plus');
const expens = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');


// const dummyData = [
//   {id:1 , text:'tea', amount :30},
//   {id:2 , text:'water', amount :90},
//   {id:3 , text:'burgur', amount :100},
//   {id:4 , text:'coffe', amount :120}
// ]

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

let transactions =localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

function generateId(){

  // Youre code 
  return Math.floor(Math.random() * 1000000);
}


function addTransaction(e){
  // your code 
  e.preventDefault();
  if(text.value.trim() === '' || amount.value.trim() === ''){
    alert('Please add text and amount');
  }else{
    const transaction = {
      id: generateId(),
      text: text.value,
      amount: +amount.value
    };
    transactions.push(transaction);
    addTransactionDOM(transaction);
    updatevalues();
    updateLocalStorage();
text.value = '';
amount.value = '';}
  
}

function addTransactionDOM(transaction){
  // your code
  const sign= transaction.amount < 0 ? '-' : '+';
  const item= document.createElement('li');
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  item.innerHTML = `${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
  <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>`;
  list.appendChild(item);

}

function updatevalues(){
  // your code
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item)=>(
    acc += item), 0).toFixed(2);
    const income = amounts.filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense= (amounts.filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1)
    .toFixed(2);
    balance.innerText = `$${total}`;
    incomes.innerText = `$${income}`;
    expens.innerText = `$${expense}`;

}

function updateLocalStorage(){
  // your code
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

function removeTransaction(id){
//  your code
transactions = transactions.filter(money => money.id !== id);
    updateLocalStorage();
    init();
}

function init(){
  // your code
  list.innerHTML = '';
  transactions.forEach(addTransactionDOM);
    updatevalues(); 
}
init();
// add event Listener
form.addEventListener('submit', addTransaction);