//MAIN JAVASCRIPT
$(document).ready(function(){
  $('.slider').slider({
    full_width: true,
    interval:5000,
    transition:800,
    indicators: true,
    height: '100%'
  });
  $('.parallax').parallax();
  $('textarea').characterCounter();
});
