let activeValue1 = '';

const onChangeOrder = (value) => {

  activeValue1 = value;
  const urlParams21 = new URLSearchParams(window.location.search);
  urlParams21.set("tabs", value);
  window.history.pushState({}, '', `${window.location.pathname}?${urlParams21.toString()}`);
  updateButtons1();
};

const updateButtons1 = () => {
  const buttons = document.querySelectorAll('.toggle__btn');
  buttons.forEach((button) => {
    button.classList.toggle('active', button.textContent.toLowerCase() === activeValue1);
  });
};

const urlParams21 = new URLSearchParams(window.location.search);
const status1 = urlParams21.get("tabs");
if (status1 === null) {
  activeValue1 = 'order book';
} else {
  activeValue1 = status1;
}
updateButtons1();




let currentSelection = '';

const onSelect = (value) => {
  currentSelection = value;
  const urlParams2 = new URLSearchParams(window.location.search);
  urlParams2.set("list", value);
  window.history.pushState({}, '', `${window.location.pathname}?${urlParams2.toString()}`);
  updateButtons2();
};

const updateButtons2 = () => {
  const buttons = document.querySelectorAll('.icon__btn');
  buttons.forEach((button) => {
    button.classList.toggle('active', button.classList.contains(`icon__btn_${currentSelection}`));
  });
};

const urlParams2 = new URLSearchParams(window.location.search);
const status2 = urlParams2.get("list");
if (status2 === null) {
  currentSelection = 'all';
} else {
  currentSelection = status2;
}
updateButtons2();