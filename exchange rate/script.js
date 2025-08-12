const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const swap = document.getElementById('swap');
const rateEl = document.getElementById('Excange-rate'); // Note: typo in id

function calculate() {
  const from = currencyOne.value;
  const to = currencyTwo.value;
  const amount = amountOne.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[to];
      rateEl.textContent = `1 ${from} = ${rate} ${to}`;
      amountTwo.value = (amount * rate).toFixed(2);
    });
}

// Swap currencies and recalculate
swap.addEventListener('click', () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
});

// Calculate on input change
currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);

calculate();