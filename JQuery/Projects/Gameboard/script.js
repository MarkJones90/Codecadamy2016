var main = function() {
  $('.more-btn').click(function() {
    $(this).next().toggle();
  });
  $('.share').click(function() {
    $('.share-menu').toggle();
  });
   $('.glyphicon-bell').click(function() {
    $(this).toggleClass('active');
  });
  
};

$(document).ready(main);
