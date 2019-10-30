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
        // $(".page__color--evening").velocity({opacity: "1"});

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
        $(".page__animation__mrt--people1").velocity({right: "0%", opacity: "1"}, {delay: 600, duration: 700});
        $(".page__animation__mrt--people2").velocity({right: "0%", opacity: "1"}, {delay: 900, duration: 700});
        $(".page__animation__mrt--people3").velocity({right: "0%", opacity: "1"}, {delay: 1200, duration: 700});
        $(".page__animation__mrt--people4").velocity({right: "0%", opacity: "1"}, {delay: 1500, duration: 700});
        $(".page__animation__mrt--people5").velocity({right: "0%", opacity: "1"}, {delay: 1800, duration: 700});
      } 
      else if (index == 5 && direction == "up") {
        $(".page__static__apart").removeClass("moveLeft");
        $(".page__static__mrt").addClass("scrollSlide");                    
      }
      else if (index == 5 && direction == "down") {    
        $(".page__static__mrt").addClass("moveLeft");  
        $(".page__static__mrt2").removeClass("scrollSlide");
      } 
      else if (index == 6 && direction == "up") { 
        $(".page__static__mrt").removeClass("moveLeft");
        $(".page__static__mrt2").addClass("scrollSlide");
      } 
      else if (index == 6 && direction == "down") {
        $(".page__static__mrt2").addClass("moveLeft");  
        $(".page__static__listrik").removeClass("scrollSlide");
        $(".page__animation__mrt2--train").velocity({left: "-100%"}, {delay: 1000, duration: 2000});
        $(".page__animation__listrik--mrt").velocity({left: "-100%"}, {delay: 1000, duration: 2000});
        $(".page__animation__listrik--angkot").velocity({left: "0%"}, {delay: 1200, duration: 2000});
        $(".page__static__listrik").addClass("fixed");
        $(".page__static__listrik").addClass("zTop");
      }
      else if (index == 7 && direction == "up") {    
        $(".page__static__listrik").removeClass("fixed");
        $(".page__static__listrik").removeClass("zTop");
        $(".page__animation__mrt2--train").velocity({left: "0%"}, {delay: 1000, duration: 2000});
        $(".page__animation__listrik--mrt").velocity({left: "0%"}, {delay: 1000, duration: 2000});
        $(".page__static__mrt2").removeClass("moveLeft");  
        $(".page__static__listrik").addClass("scrollSlide");
        $(".page__animation__listrik--angkot").removeClass("zTop");
        $(".page__animation__listrik--angkot").removeClass("fixed");
      } 
      else if (index == 7 && direction == "down") {    
        $(".page__animation__listrik--angkot").addClass("zTop");
        $(".page__animation__listrik--angkot").addClass("fixed");
        $(".page__static__listrik").addClass("moveLeft");  
        $(".page__static__sutet").removeClass("scrollSlide");
      } 
      else if (index == 8 && direction == "up") {    
        $(".page__static__listrik").removeClass("moveLeft");  
        $(".page__static__sutet").addClass("scrollSlide");
      } 
      else if (index == 8 && direction == "down") {    
        $(".page__static__sutet").addClass("moveLeft");  
        $(".page__static__listrikcity").removeClass("scrollSlide");
      } 
      else if (index == 9 && direction == "up") {    
        $(".page__static__sutet").removeClass("moveLeft");  
        $(".page__static__listrikcity").addClass("scrollSlide");
      } 
      else if (index == 9 && direction == "down") {    
        $(".page__static__listrikcity").addClass("moveUp");  
        $(".page__static__pembangkit").addClass("moveDown");
        $(".page__static__listrik").addClass("moveUp");
      } 
      else if (index == 10 && direction == "up") {    
        $(".page__static__listrik").removeClass("moveUp");
        $(".page__static__listrikcity").removeClass("moveUp");  
        $(".page__static__pembangkit").removeClass("moveDown");        
      } 
      else if (index == 10 && direction == "down") {    
        $(".page__static__pembangkit").addClass("moveUp");  
        $(".page__static__tambang").addClass("moveDown");
      } 
      else if (index == 11 && direction == "up") {    
        $(".page__static__pembangkit").removeClass("moveUp");  
        $(".page__static__tambang").removeClass("moveDown");                
      } 
      else if (index == 11 && direction == "down") {    
        $(".overlay__halfblack2").fadeIn(300);
      } 
      else if (index == 12 && direction == "up") {    
        $(".overlay__halfblack2").fadeOut(300);
      } 
      else if (index == 12 && direction == "down") {    
        $(".overlay__halfblack2").fadeOut(300);
        $(".overlay__grey").fadeIn(300);
      } 
      else if (index == 13 && direction == "up") {    
        $(".overlay__halfblack2").fadeIn(300);
        $(".overlay__grey").fadeOut(300);
        
      } 
      else if (index == 13 && direction == "down") {    
        
      } 
      else if (index == 14 && direction == "up") {    
        
      } 
      else if (index == 14 && direction == "down") {    
        $(".overlay__halfblack2").fadeIn(300);
        $(".overlay__grey").fadeOut(300);
        
      } 
      else if (index == 15 && direction == "up") {    
        $(".overlay__halfblack2").fadeOut(300);
        $(".overlay__grey").fadeIn(300);
        
      } 
      else if (index == 15 && direction == "down") {    
        // $(".page__static__tambang").addClass("moveLeft");  
        // $(".page__static__produksi").removeClass("scrollSlide");
        $(".overlay__halfblack2").fadeOut(300);
        $(".page__static__tambang").addClass("moveUp");  
        $(".page__static__produksi").addClass("moveDown");
      } 
      else if (index == 16 && direction == "up") {    
        // $(".page__static__tambang").removeClass("moveLeft");  
        // $(".page__static__produksi").addClass("scrollSlide");
        $(".page__static__tambang").removeClass("moveUp");  
        $(".page__static__produksi").removeClass("moveDown");
        $(".overlay__halfblack2").fadeIn(300);
        
      } 
      else if (index == 16 && direction == "down") {    
        
      } 
      else if (index == 17 && direction == "up") {    

      } 
      else if (index == 17 && direction == "down") {    
        $(".page__static__produksi").addClass("moveUp");  
        $(".page__static__eksplo").addClass("moveDown");
      } 
      else if (index == 18 && direction == "up") {    
        $(".page__static__produksi").removeClass("moveUp");  
        $(".page__static__eksplo").removeClass("moveDown");
      } 
      else if (index == 18 && direction == "down") {    

      } 
      else if (index == 19 && direction == "up") {    

      } 
      else if (index == 19 && direction == "down") {    

      } 
      else if (index == 20 && direction == "up") {    

      } 
      else if (index == 20 && direction == "down") {    

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

