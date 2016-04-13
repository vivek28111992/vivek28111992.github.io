$(document).ready(function(){

  $(function(){
      $(".element").typed({
        strings: ["is Web Developer.", "likes js.", "loves football."],
        loop: true,
        backDelay: 1000,
        typeSpeed: 0
      });
  });


  $('.bxslider').bxSlider({
  			
  	pager:false,
  	auto:false
  	
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

  	$("#contact_form").submit(function(event)
	{
    var formData = {
        'name'              : $('input[name=name]').val(),
        'contact_no'         : $('input[name=contact_no]').val(),		
        'email'             : $('input[name=email]').val(),
        'message'             : $('textarea[name=message]').val()
    };
			$.ajax({
				type:'post',
				data:formData,
				url:'https://formspree.io/pawarvivek29@gmail.com',
				dataType: "json",
			});
			event.preventDefault();
			$('#thank_you_msg').show().delay(1000).fadeOut();
			return false;
	}); 

});