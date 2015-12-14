$( document ).ready(function() {
  
  $.ajaxSetup({ async: false });
  
    // LOAD PARTIALS
    $.get("../partials/menu-primary.html", '', function (data) { $(".menu-primary").append(data); });
    $.get("../partials/search-box.html", '', function (data) { $(".search-form").append(data); });
    $.get("../partials/slider.html", '', function (data) { $(".carousel").append(data); });
    $.get("../partials/parallax.html", '', function (data) { $(".parallax-container").append(data); });
    $.get("../partials/contact-form.html", '', function (data) { $(".contact").append(data); });

  $.ajaxSetup({ async: true });

});