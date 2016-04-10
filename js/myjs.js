$(document).ready(function(){

  $(function(){
      $(".element").typed({
        strings: ["is Web Developer.", "like js.", "love football."],
        loop: true,
        backDelay: 1000,
        typeSpeed: 0
      });
  });


  $('.bxslider').bxSlider({
  			
  	pager:false,
  	auto:true
  	
  });

  $('.per_project').hide();
  $('#input').click(function(){
  	  	if($(this).is(':checked')){
  		$('.per_project').show();
  		$('.pro_projects').hide();
  	}
  	else{
  		$('.per_project').hide();
  		$('.pro_projects').show();
  	}
  });

});