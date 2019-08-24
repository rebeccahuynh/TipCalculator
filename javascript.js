'use strict';

function totalSplit () {
  //Grabbing the object to calculate the tip function
  var totalPrice = document.getElementById('totalPriceInput').value;
    console.log('Total Price:', '$' + totalPrice);  
  var serviceQuality = document.getElementById('serviceQualityForm').value;
    console.log('Service Quality:', serviceQuality*100 + '%');
  var peopleCount = document.getElementById('peopleCountInput').value;
      console.log('Number of People:', peopleCount);

  //Ensures valid inputs on the whole form
  if (totalPrice === ''|| totalPrice <= 0){
    alert ('Please enter a valid bill total.');
    return;
  } 
  
  if (serviceQuality == 0) {
    alert ('Please choose the quality of service.');
    return;
  } 
  
  if (peopleCount === '' || peopleCount <=0){
    alert('Number of people have been set to 1 since there was no input/invalid input');
    peopleCount = 1;
  }

  //Calculate tip per person
  var billSplit = (totalPrice * serviceQuality) / peopleCount;
  billSplit = Math.round(billSplit * 100) / 100;
  billSplit = billSplit.toFixed(2);
    console.log('Bill Split Amount:', '$' + billSplit + ' per person')

  //Tip Diplay
  document.getElementById('results').style.display = "block";
  document.getElementById('results').innerHTML =  '$' + billSplit;
}

//Hide the results message before the calculate button is clicked
document.getElementById('results').style.display = 'none';

//Call function onClick event to calculate tip total and display in results
document.getElementById('calculate').onclick = function(){
  totalSplit();
};
  
//Clear Results Message
var textResults = document.getElementById('results');

function clearResults(){
  textResults.style.display = 'none';
}

document.getElementById('reset').onclick = function (){
  clearResults ();
};