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

	/*$("#submit").click(function(e)
	{
		e.preventDefault();    
		//our_offr_div_relative
		var error = false;
		var name = $('#name').val();
		var email = $('#email').val();
		var phone = $('#contact_no').val();
		var message = $('#message').val();
		var exp = /^(\+\d{1,3}[- ]?)?\d{10,12}$/;
		
		if(name.length == 0)
		{
			var error = true;
			//$('#CampName_error').fadeIn(500);
			//$('#name').css("background-color","#09718f");
		}
		else
		{
			//$('#CampName_error').css("background-color","#dfdfdf");
			 //$('#CampName_error').fadeOut(500);
		}
		if(email.length == 0 || email.indexOf('@') == '-1')
		{
			 var error = true;
			 //$('#CampEmail_error').fadeIn(500);
			 //$('#email').css("background-color","#09718f");
		}
		else
		{
			 //$('#CampEmail_error').fadeOut(500);
			 //$('#CampEmail_error').css("background-color","#dfdfdf");
		}
		if((exp.test(phone))==false)
		{
			 var error = true;
			 //$('#CampPhone_error').fadeIn(500);
			 //$('#email').css("background-color","#09718f");
		}
		else
		{
			 //$('#CampPhone_error').fadeOut(500);
			 //$('#CampEmail_error').css("background-color","#dfdfdf");
		}
		if(message.length == 0)
		{
			var error = true;
			//$('#CampComment_error').fadeIn(500);
			//$('#company').css("background-color","#09718f");
		}
		else
		{
			//$('#CampComment_error').fadeOut(500);	
			//$('#CampCompany_error').css("background-color","#dfdfdf");
		}
		if(error == false)
        {
        	alert('hello');
			$.ajax({
				type:'post',
				data:$("#contact_form").serialize(),
				url:'contact_page.php',
				success:function(result)
				{
					if(result=="sent")
					{
						alert('hi');
						//$('#mail_success').fadeIn(500);
						$('#contact_form')[0].reset();
					}
					else
					{
						//$('#mail_success').fadeIn(500);
						$('#contact_form')[0].reset(); 

					}
				}
			});
		}
	});*/  	


});