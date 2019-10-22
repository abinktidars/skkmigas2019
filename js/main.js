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
        $(".page__animation__city--train").velocity({right:"0"}, {delay: 500, duration: 5000});
        $(".page__static__build").addClass("moveDown");
      } 
      else if (index == 2 && direction == "up") {
        $(".backtop").removeClass("show");
        $(".page__static__build").removeClass("moveDown");
      } 
      else if (index == 2 && direction == "down") {      
        $(".page__animation__city--awan").fadeOut(300);
        $(".page__animation__city--awan2").fadeOut(300);
        $(".overlay__halfblack").fadeIn(300);
        $(".page__animation__city--moon").fadeIn(300);
        
      } 
      else if (index == 3 && direction == "up") {
        $(".page__animation__city--awan").fadeIn(300);
        $(".page__animation__city--awan2").fadeIn(300);
        $(".overlay__halfblack").fadeOut(300);
        $(".page__animation__city--moon").fadeOut(300);
        
      }
      else if (index == 3 && direction == "down") {          
        $(".page__static__build").addClass("moveLeft");  
        $(".page__static__apart").removeClass("scrollSlide");
        $(".page__animation__apart--mobil").velocity({right: "20%"}, {delay: 200, duration: 3000}); 
        $(".page__animation__apart--mobil2").velocity({left: "32%"}, {delay: 1500, duration: 5000})  
        
      } 
      else if (index == 4 && direction == "up") {
        $(".page__static__apart").addClass("scrollSlide");
        $(".page__static__build").removeClass("moveLeft");  
        
      }
      else if (index == 4 && direction == "down") { 
        $(".page__static__apart").addClass("moveLeft");  
        $(".page__static__mrt").removeClass("scrollSlide");
        $(".page__animation__mrt--people").velocity({right: "0%", opacity: "1"}, {delay: 300, duration: 700});
      } 
      else if (index == 5 && direction == "up") {
        $(".page__static__apart").removeClass("moveLeft");
        $(".page__static__mrt").addClass("scrollSlide");  
                  
      }
      else if (index == 5 && direction == "down") {    
        
      } 
      else if (index == 6 && direction == "up") { 
        
      } 
      else if (index == 6 && direction == "down") {
                  
      }
      else if (index == 7 && direction == "up") {    

      } 
      else if (index == 7 && direction == "down") {    

      } 
      else if (index == 8 && direction == "up") {    

      } 
      else if (index == 8 && direction == "down") {    

      } 
      else if (index == 9 && direction == "up") {    

      } 
      else if (index == 9 && direction == "down") {    

      } 
      
    }
  });

  // Picture element HTML5 shiv
  document.createElement("picture");
  
});

// Mobile Version
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  $(".cover__background").remove();
} else {
  $(".social__item--wa").hide();
}

