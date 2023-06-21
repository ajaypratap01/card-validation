"use strict";

document.querySelector("#cardNumber").addEventListener("input", function() {
  const cardNumber = this.value.trim();
  const cardTypeElement = this.nextElementSibling;

  if (/^4\d{15}$/.test(cardNumber)) {
    cardTypeElement.style.color = "green";
    cardTypeElement.textContent = "Visa";
  } else if (/^5\d{15}$/.test(cardNumber)) {
    cardTypeElement.style.color = "blue";
    cardTypeElement.textContent = "Mastercard";
  } else if (/^3\d{15}$/.test(cardNumber)) {
    cardTypeElement.style.color = "red";
    cardTypeElement.textContent = "American Express";
  } else if (/^6\d{15}$/.test(cardNumber)) {
    cardTypeElement.style.color = "purple";
    cardTypeElement.textContent = "Rupay";
  } else {
    cardTypeElement.style.color = "red";
    cardTypeElement.textContent = "Invalid card";
  }
});

document.querySelector("#expDate").addEventListener("input", function() {
  const expirationDate = this.value.trim();
  const expirationDateMessage = this.nextElementSibling;

  if (/^(0[1-9]|1[0-2])\/(20\d{2}|[3-9]\d)$/.test(expirationDate)) {
    expirationDateMessage.textContent = "Valid";
  } else {
    expirationDateMessage.textContent = "Invalid";
  }
});

document.querySelector("#cvNumber").addEventListener("input", function() {
  const cvNumber = this.value.trim();
  const cvNumberMessage = this.nextElementSibling;

  if (/^\d{3}$/.test(cvNumber)) {
    cvNumberMessage.textContent = "Valid";
  } else {
    cvNumberMessage.textContent = "Invalid or must be 3 digits";
  }
});

document.querySelector("#cardOwner").addEventListener("input", function() {
  const cardOwner = this.value.trim();
  const cardOwnerMessage = this.nextElementSibling;

  if (/[a-zA-Z]{3}/.test(cardOwner)) {
    cardOwnerMessage.textContent = "Valid name";
  } else {
    cardOwnerMessage.textContent = "Invalid name";
  }
});
