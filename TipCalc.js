let tipAmount = document.getElementById("tipAmount");
let billTotal = document.getElementById("billTotal");
let calcTip = document.getElementById("calcTip");


function ttlBillAmt () {
  billAmount + tipAmount;
}

calcTip.addEventListener('click', function tipAmtBfr () {
  let billAmount = document.getElementById("billAmount").value;
  let tipPercentage = document.getElementById("tipPercentage").value / 100;
  // console.log(billAmount * tipPercentage);
  tipAmount.value = (billAmount * tipPercentage).toFixed(2);
  billTotal.value = (Number(tipAmount.value) + Number(billAmount)).toFixed(2);
});