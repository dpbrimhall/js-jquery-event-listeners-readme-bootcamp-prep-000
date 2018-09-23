function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt() {
  var addClass = document.querySelector('img');
  addClass.className = "tasty"
  return
}

function pressIt() {
   $('input').on('keydown', function() {
     alert('You have pressed the "G" key')
   }) 
}


$(document).ready(function(){

// call functions here

});
