// get modal
var modal = document.getElementById('popup-menu');

//get button
var main_btn = document.getElementById('trigger-modal');
var nav_btn = document.getElementById('trigger-modal2');


//get close button
var close = document.getElementsByClassName('close')[0];

// On button click, open modal
main_btn.onclick = function() {
  modal.style.display = 'block';
} 
nav_btn.onclick = function() {
    modal.style.display = 'block';
  } 
// On close button click, close modal
close.onclick = function() {
  modal.style.display = 'none';
}

// On outside click, close modal
window.onclick = function(event) { 
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}