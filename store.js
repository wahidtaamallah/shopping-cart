
const likeBtn = Array.from(document.querySelectorAll(".like-btn"));
const minusBtn = Array.from(document.querySelectorAll(".minus-btn"));
const plusBtn = Array.from(document.querySelectorAll(".plus-btn"));
const quantity = Array.from(document.querySelectorAll(".quantity"));
const price = Array.from(document.querySelectorAll(".unit-price"));
const removeBtn = Array.from(document.querySelectorAll(".remove-btn"));
const totalPrice = document.querySelector(".total-price");



function changeColor(el) {
  console.log(el);
  if (el.target.style.color !== "red") {
    el.target.style.color = "red";
  } else {
    el.target.style.color = "black";
  }
}

function updateTotal() {
  let total = 0;
  for (let i = 0; i < quantity.length; i++) {
    total = total + quantity[i].innerText * price[i].innerText;
  }
  totalPrice.innerText = total;
}


function increment(el) {
  el.target.previousElementSibling.innerText =
    Number(el.target.previousElementSibling.innerText) + 1;
  updateTotal();
}

function decrement(el) {
  if (Number(el.target.innerText) < 1) {
    el.target.innerText = 0;
  } else {
    el.target.innerText = Number(el.target.innerText) - 1;
  }
  updateTotal();
}

function removeElement(el) {
  el.target.parentElement.parentElement.remove();
  quantity[i].innerText = 0;
  updateTotal();
}


for (let i = 0; i < plusBtn.length; i++) {
    likeBtn[i].addEventListener("click", changeColor);

  plusBtn[i].addEventListener("click", function() {
    plusBtn[i].previousElementSibling.innerText =
      Number(plusBtn[i].previousElementSibling.innerText) + 1;
    updateTotal();
  });


  minusBtn[i].addEventListener("click", function() {
    let btnValue = minusBtn[i].nextElementSibling.innerText;
    if (btnValue < 1) {
      minusBtn[i].nextElementSibling.innerText = 0;
    } else {
      minusBtn[i].nextElementSibling.innerText = Number(btnValue) - 1;
    }
    updateTotal();
  });


  removeBtn[i].addEventListener("click", function() {
    
    removeBtn[i].parentElement.parentElement.remove();
    
    quantity[i].innerText = 0;
    updateTotal();
  });
}