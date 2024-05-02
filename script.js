// get modal
var modal = document.getElementById('popup-menu');


var close = document.getElementsByClassName('close')[0];

// On button click, open modal
document.querySelectorAll('.trigger-modal').forEach(element => {
  element.addEventListener('click', function() {
    modal.style.display = 'block';
  });
});

// On close button click, close modal
close.onclick = function() {
  modal.style.display = 'none';
}

// also closes menu when clicking outside the modal
window.onclick = function(event) { 
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}