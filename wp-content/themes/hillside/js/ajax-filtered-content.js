// AJAX function for filtering content
var ajaxFilteredItems = function(){
  var $mainContent = $('.ajax-filtered-content');
  var $catLinks = $('.ajax-type-filters li.cat-item a');

  $catLinks.on('click', function(e){
    e.preventDefault();
    var $el = $(this);
    var value = $el.attr('href');
    $mainContent.animate({opacity: "0"});
    setTimeout(function() {
      $mainContent.load(value + " .inside", function(){
        $mainContent.animate({opacity: "1"});
      });
    }, 100);
  });
};
ajaxFilteredItems();