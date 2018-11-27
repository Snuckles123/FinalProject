$( document ).ready(function() {
  /* activate jquery isotope */
  var $container = $('#posts').isotope({
    itemSelector : '.item',
    isFitWidth: true
  });

  $(window).smartresize(function(){
    $container.isotope({
      columnWidth: '.col-sm-3'
    });
  });
  
  $container.isotope({ filter: '*' });

    // filter items on button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });

  $('.parallax-window').parallax({imageSrc: 'img/home-special-banner.jpg'});
});

// Get the modal
var modalSignup = document.getElementById('sign-up-form');
var modalLogin = document.getElementById('login-form');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalSignup) {
        modalSignup.style.display = "none";
    } else if (event.target == modalLogin) {
      modalLogin.style.display = "none";
    }
}