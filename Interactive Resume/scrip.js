 $(document).ready(function() {
      $("#skil").hover(function()
      {
          $("#skils").slideDown("slow");
         // $("#skils").fadeIn("slow");
        }); 
        //,
          //function() {
             // $("#skils").fadeOut("5000");
          //});
      $('[data-toggle="tooltip"]').tooltip();
      
       $("#pro").hover(function()
      {
          $("#proj").slideDown("slow");
      
        });
        
         $("#achi").hover(function()
      {
          $("#achiv").slideDown("slow");
      
        });
        
         $("#edu").hover(function()
      {
          $("#educ").slideDown("slow");
      
        });
     
     $(window).scroll(function(){
		if ($(this).scrollTop() > 350) {
			$('.scrollToTop').fadeIn(2000);
		} else {
			$('.scrollToTop').fadeOut(1000);
		}
	});
	
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
	//increas opacity of arrow on hover
	
	 $(".scrollToTop").hover(function(){
        $(this).css("opacity", "1.0");
        }, function(){
        $(this).css("opacity", "0.5");			// restore when not unhover
    });
     
     
     
     
      }); //document end