// btn
let btnClick = document.querySelector("#btn-id");
// array H5 price
let priceArray = document.querySelectorAll("h5");
// totle all 
let totle = document.querySelector("h3");
// first price
let priceTextOne = priceArray[0].innerHTML;
//  Second price
let priceTextTwo = priceArray[1].innerHTML;
// Third price
let priceTextTrhee = priceArray[2].innerHTML;
// all the price Number in the H5 
let priceAll = [
  Number(priceTextOne),
  Number(priceTextTwo),
  Number(priceTextTrhee),
];
//  emty array
let newPriceAll = []
// SUM : totle price (reduce)
const initialValue = 0;
const sumWithInitial = priceAll.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
}, initialValue);
totle.innerHTML = `${sumWithInitial} $`;
// function change Price : first one
function changePrice() {
  let firstPrice = Number(priceAll[0]);
  let inputFirst = document.getElementById("input-one").value;
  firstPrice = inputFirst * firstPrice;
  priceArray[0].innerHTML = `${firstPrice} $ `;
  newPriceAll[0] = firstPrice ;
}
// function change Price : second
function changePriceTwo() {
  let SecondPrice = Number(priceAll[1]);
  let inputSecond = document.getElementById("input-two").value;
  SecondPrice = inputSecond * SecondPrice;
  priceArray[1].innerText = `${SecondPrice} $ `;
  newPriceAll[1] = SecondPrice;
}
// function change Price : Third
function changePriceThree() {
  let ThirdPrice = Number(priceAll[2]);
  let inputThird = document.getElementById("input-three").value;
  ThirdPrice = inputThird * ThirdPrice;
  priceArray[2].innerText = `${ThirdPrice}$`;
  newPriceAll[2] = ThirdPrice;
}
function changePricetotle(){
    changePrice();
    changePriceTwo();
    changePriceThree();
    const totleValue = 0;
    const sumTotle = newPriceAll.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
    }, totleValue);
    totle.innerHTML = `${sumTotle} $`;
    console.log(sumTotle);
}
// print the function to the input : f.changePrice , f.SchangePriceTwo , changePriceThree
document.getElementById("input-one").addEventListener("change", changePricetotle);
document.getElementById("input-two").addEventListener("change", changePricetotle);
document.getElementById("input-three").addEventListener("change", changePricetotle);

// btn event : deleta
// let btnTshirTow = document.querySelector("btn-t-shirt-two");
// let btnTshirThree = document.querySelector("btn-t-shirt-three");
// // class
// console.log(tShirtClassOne);
// let tShirtClassTow = document.querySelector(".t-shirt-two-container");
// let tShirtClassThree = document.querySelector(".t-shirt-three-container");
let btnTshirtOne = document.querySelector("#btn-t-shirt-one");
btnTshirtOne.addEventListener("click",function(){
  let tShirtClassOne = document.querySelector(".t-shirt-one-container");
  tShirtClassOne.remove();
});