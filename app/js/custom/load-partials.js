$( document ).ready(function() {
  
  $.ajaxSetup({ async: false });
  
    // LOAD PARTIALS
    $.get("../partials/menu-primary.html", '', function (data) { $(".menu-primary").append(data); });
  
  $.ajaxSetup({ async: true });

});