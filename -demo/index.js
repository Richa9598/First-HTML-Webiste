//Execute JS code where my project page DOM is ready
$(document).ready(function()
                 {
   //Home image fade
    "use strict";
  
    
    //about us page
   
     
    $("img").click(function(){
    
    $("#fade2").fadeOut(3000);
  });
    
    
   });
//aboutus teacher image
  
    $(document).ready(function(){
    $("#img-js").hover(
    function(){$(this).animate({width: "450px", height:"450px"}, 2000);},        
    function(){$(this).animate({width: "300px", height:"300px"}, 2000);}
    )
});

//gallery section
 $(document).ready(function(){
    $("#gal1").hover(
    function(){$(this).animate({width: "250px", height:"250px"}, 2000);},        
    function(){$(this).animate({width: "200px", height:"200px"}, 2000);}
    )
});


 $(document).ready(function(){
    $("#gal2").hover(
    function(){$(this).animate({width: "250px", height:"250px"}, 2000);},        
    function(){$(this).animate({width: "200px", height:"200px"}, 2000);}
    )
});


 $(document).ready(function(){
    $("#gal3").hover(
    function(){$(this).animate({width: "250px", height:"250px"}, 2000);},        
    function(){$(this).animate({width: "200px", height:"200px"}, 2000);}
    )
});


 $(document).ready(function(){
    $("#gal4").hover(
    function(){$(this).animate({width: "250px", height:"250px"}, 2000);},        
    function(){$(this).animate({width: "200px", height:"200px"}, 2000);}
    )
});



//
$(document).ready(function()
                 {
    //about us page
    "use strict";
  
    
   
   $(".abt-1").mousedown(function(e){
        $(".abt-1").hide(2000,function(){
            //console.log("hiding done");
        });
        $(".abt-1").show(2000,function(){
           // console.log("show success");
        });
    });
    
    
  
    });


$(document).ready(function()
                 {
   
    "use strict";
  
    
    //we all dance
   
     $("button").click(function(){
    $("#hideh3").hide(1000);
  //  alert("The paragraph is now hidden");
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  
    
   });
  
    });


$(document).ready(function()
                 {
   
    "use strict";
  
    
    //contact us
   
    $("h1").click(function(){
    $("#h11").slideUp(2000).slideDown(2000);
  });
    
   });
  
   
