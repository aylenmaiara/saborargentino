(function () {
        var options = {
            whatsapp: "+5491123456789",
            call_to_action: "Chateá con nosotros", 
            position: "right", 
        };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();


$(document).ready(function () {
        $(".owl-carousel").owlCarousel({
          items: 1,
          loop: true,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true
        });
 });


 /*3D Slider*/
 jQuery(document).ready(function(){

  function detect_active(){
      // get active
      var get_active = $("#dp-slider .dp_item:first-child").data("class");
      $("#dp-dots li").removeClass("active");
      $("#dp-dots li[data-class="+ get_active +"]").addClass("active");
    }
    $("#dp-next").click(function(){
      var total = $(".dp_item").length;
      $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
      $.each($('.dp_item'), function (index, dp_item) {
        $(dp_item).attr('data-position', index + 1);
      });
      detect_active();
  
    });
  
    $("#dp-prev").click(function(){
      var total = $(".dp_item").length;
      $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
      $.each($('.dp_item'), function (index, dp_item) {
        $(dp_item).attr('data-position', index + 1);
      });
  
      detect_active();
    });
  
    $("#dp-dots li").click(function(){
      $("#dp-dots li").removeClass("active");
      $(this).addClass("active");
      var get_slide = $(this).attr('data-class');
      console.log(get_slide);
      $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
      $.each($('.dp_item'), function (index, dp_item) {
        $(dp_item).attr('data-position', index + 1);
      });
    });
  
  
    $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function(){
      var get_slide = $(this).attr('data-class');
      console.log(get_slide);
      $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
      $.each($('.dp_item'), function (index, dp_item) {
        $(dp_item).attr('data-position', index + 1);
      });
  
      detect_active();
    });
  });