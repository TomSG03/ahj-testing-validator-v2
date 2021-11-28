import Validator from '../validator';

test.each([
  ['American Express', '371449635398431', true],
  ['MasterCard', '5555555555554444', true],
  ['Visa', '4111111111111111', true],
  ['Мир', '2202200223948454', true],
  ['Invalid card', '2202200223948455', false],
])(('card number checked'), (_, input, expected) => {
  document.body.innerHTML = `<div class="validator" id="validator">
  <div class="cards-box">
    <img src="../img/visa.png" class="card invalid" data-card="visa" alt="visa">
    <img src="../img/mastercard.png" class="card invalid" data-card="masterCard" alt="mastercard">
    <img src="../img/discover.png" class="card invalid" data-card="discover" alt="discover">
    <img src="../img/jcb.png" class="card invalid" data-card="jcb" alt="jcb">
    <img src="../img/american_express.png" class="card invalid" data-card="amExpress" alt="american_express">
    <img src="../img/mir.jpg" class="card invalid" data-card="mir" alt="mir">
  </div>
  <div class="input-box">
    <input type="text" class="input">
    <div class="validate">
      <button class="checkButton">Click to Validate</button>
    </div>
  </div>
  <div class="message-box">
    <span class="message">
    </span>
  </div>
</div>`;

  const validator = new Validator(document.getElementById('validator'));
  validator.check();
  const formInput = document.querySelector('.input');
  formInput.value = input;
  const button = document.querySelector('.input-box .checkButton');
  button.click();
  const rezult = validator.card.luhnAlgorithm();
  expect(rezult).toBe(expected);
});

test.each([
  [4, '371449635398431', 'amExpress'],
  [1, '5555555555554444', 'masterCard'],
  [0, '4111111111111111', 'visa'],
  [5, '2202200223948454', 'mir'],
])(('payment system'), (num, input, expected) => {
  document.body.innerHTML = `<div class="validator" id="validator">
  <div class="cards-box">
    <img src="../img/visa.png" class="card invalid" data-card="visa" alt="visa">
    <img src="../img/mastercard.png" class="card invalid" data-card="masterCard" alt="mastercard">
    <img src="../img/discover.png" class="card invalid" data-card="discover" alt="discover">
    <img src="../img/jcb.png" class="card invalid" data-card="jcb" alt="jcb">
    <img src="../img/american_express.png" class="card invalid" data-card="amExpress" alt="american_express">
    <img src="../img/mir.jpg" class="card invalid" data-card="mir" alt="mir">
  </div>
  <div class="input-box">
    <input type="text" class="input">
    <div class="validate">
      <button class="checkButton">Click to Validate</button>
    </div>
  </div>
  <div class="message-box">
    <span class="message">
    </span>
  </div>
</div>`;

  const validator = new Validator(document.getElementById('validator'));
  validator.check();
  const formInput = document.querySelector('.input');
  formInput.value = input;
  const button = document.querySelector('.input-box .checkButton');
  button.click();
  const rezult = document.getElementsByClassName('card');
  expect(rezult[num].dataset.card).toBe(expected);
});
