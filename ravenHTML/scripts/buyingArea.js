
let currentSelection23 = '';

const onSelectTransact = (value) => {
  currentSelection23 = value;
  const urlParams23 = new URLSearchParams(window.location.search);
  urlParams23.set("transaction", value);
  window.history.pushState({}, '', `${window.location.pathname}?${urlParams23.toString()}`);
  updateButtons23();
};

const updateButtons23 = () => {
  const buttons = document.querySelectorAll('.toggle__action');
  buttons.forEach((button) => {
    button.classList.toggle('active', button.classList.contains(`active__${currentSelection23}`));
  });
};

const urlParams23 = new URLSearchParams(window.location.search);
const status23 = urlParams23.get("transaction");
if (status23 === null) {
  currentSelection23 = 'buy';
} else {
  currentSelection23 = status23;
}
updateButtons23();

let currentSelection24 = '';

const limitForm = document.getElementById("limit-form")
const marketForm = document.getElementById("market-form")
const stopForm = document.getElementById("stop-form")

const onSelectBuyType = (value) => {
  currentSelection24 = value;
  const urlParams24 = new URLSearchParams(window.location.search);
  urlParams24.set("buy", value);
  window.history.pushState({}, '', `${window.location.pathname}?${urlParams24.toString()}`);
  updateButtons24();
  updateForm24(value);
};
const updateForm24 = (value) => {
    if(value === "limit"){
        limitForm.style.display = "flex";
        marketForm.style.display = "none";
        stopForm.style.display = "none";
    }
    else if(value === "market"){
        limitForm.style.display = "none";
        marketForm.style.display = "flex";
        stopForm.style.display = "none";
    }
    else{
        limitForm.style.display = "none";
        marketForm.style.display = "none";
        stopForm.style.display = "flex";
    }
}
const updateButtons24 = () => {
  const buttons = document.querySelectorAll('.text__btn--v2');
  buttons.forEach((button) => {
    button.classList.toggle('active', button.textContent.toLowerCase() === currentSelection24);
  });
};

const urlParams24 = new URLSearchParams(window.location.search);
const status24 = urlParams24.get("buy");
if (status24 === null) {
  currentSelection24 = 'limit';
} else {
  currentSelection24 = status24;
}
updateButtons24();