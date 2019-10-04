$(document).ready(function() {
  // Preload
  if (
    $(window).load(function() {
      $("#preloader").fadeOut("slow", function() {
        $(this).remove();
      });
    })
  );

  // Fullpage Js
  
  $(document).on("click", "#moveDown", function() {
    $.fn.fullpage.moveSectionDown();
  });

  $(document).on("click", ".nextDown", function() {
    $.fn.fullpage.moveSectionDown();
  });
  
  var fullIndex = $(".section").length;  
  
  // Desktop Version	
  $("#fullpage").fullpage({
    scrollOverflow: true,  // Overlap Page
    
    afterLoad: function(anchorLink, index) {
      
    },

    onLeave: function(index, nextIndex, direction) {
      var leavingSection = $(this);

      if (index == 1 && direction == "down") {
        $(".backtop").addClass("show");
                    
      } 
      else if (index == 2 && direction == "up") {
        $(".backtop").removeClass("show");
      } 
      else if (index == 2 && direction == "down") {      
        
      } 
      else if (index == 3 && direction == "up") {
        
      }
      else if (index == 3 && direction == "down") {            
                          
      } 
      else if (index == 4 && direction == "up") {
           
      }
      else if (index == 4 && direction == "down") { 
        
      } 
      else if (index == 5 && direction == "up") {
                  
      }
      else if (index == 5 && direction == "down") {    
      } 
      
    }
  });
  
});

// Mobile Version
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  $(".cover__background").remove();
} else {
  $(".social__item--wa").hide();
}

