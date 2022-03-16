const currencyOne = document.getElementById('currency-one')
const amountOne = document.getElementById('amount-one')
const currencyTwo = document.getElementById('currency-two')
const amountTwo=document.getElementById('amount-two')

const rateDollar = document.getElementById('rate')
const swap = document.getElementById('swap')

function calculate(){
  const currency_one = currencyOne.value;
  const currency_two = currencyTwo.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res=> res.json())
    .then(data=> {
      const rate = data.rates[currency_two];
      
      rateDollar.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}` 

      amountTwo.value = (amountOne.value * rate).toFixed(3)
    })



}
currencyOne.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)
currencyTwo.addEventListener('change', calculate)
amountTwo.addEventListener('input', calculate)
swap.addEventListener('click', ()=>{
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate()
})

// Event Listener
calculate()