//Get the element
var valueElementBasic = document.getElementById("package-price-basic");
var valueElementPro = document.getElementById("package-price-pro");
var valueDisplayBasic = document.getElementById("room-select-basic");
var valueDisplayPro = document.getElementById("room-select-pro");
var messageBasic = document.getElementById("message-basic");
var messagePro = document.getElementById("message-pro");

// Initialize counter value
var basicValue = 199;
var proValue = 249;
var valueBasic = 199;
var valuePro = 249;
var room_count_basic = 1;
var room_count_pro = 1;

// Function to update the displayed value
function updateDisplay() {
  valueElementBasic.textContent = basicValue;
  valueElementPro.textContent = proValue;
  valueDisplayBasic.textContent = room_count_basic;
  valueDisplayPro.textContent = room_count_pro;
}

// Increase button click event
document
  .getElementById("plus-button-basic")
  .addEventListener("click", function () {
    basicValue += valueBasic;
    room_count_basic++;
    updateDisplay();
  });

document
  .getElementById("plus-button-pro")
  .addEventListener("click", function () {
    proValue += valuePro;
    room_count_pro++;
    updateDisplay();
  });

// Decrease button click event
document
  .getElementById("minus-button-basic")
  .addEventListener("click", function () {
    if (basicValue > 199) {
      basicValue -= valueBasic;
      room_count_basic--;
      updateDisplay();
    }
  });

document
  .getElementById("minus-button-pro")
  .addEventListener("click", function () {
    if (proValue > 249) {
      proValue -= valuePro;
      room_count_pro--;
      updateDisplay();
    }
  });

// Show sign up button click event
document.getElementById("sign-up-basic").addEventListener("click", function () {
  messageColorBasic();
  messageBasic.textContent =
    "Thank you for choosing " + room_count_basic + " room";
});

document.getElementById("sign-up-pro").addEventListener("click", function () {
  messageColorPro();
  messagePro.textContent = "Thank you for choosing " + room_count_pro + " room";
});

// Message box color change
function messageColorBasic() {
  document.getElementById("message-basic").style.backgroundColor = "#f1f1f1";
}

function messageColorPro() {
  document.getElementById("message-pro").style.backgroundColor = "#f1f1f1";
}
