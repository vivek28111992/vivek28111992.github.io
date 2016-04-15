$(document).ready(function(){

	$(document).on("scroll", onScroll);

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
			$('#thank_you_msg').show().delay(3500).fadeOut();		
			return false;
	}); 

	$("#about_li").click(function() {
    $('html,body').animate({
        scrollTop: $(".about").offset().top},
        1000);
	});
	$("#skill_li").click(function() {
    $('html,body').animate({
        scrollTop: $(".skill").offset().top},
        1000);
	});
	$("#portfolio_li").click(function(){
		$('html,body').animate({
			scrollTop: $(".project").offset().top},
			1000);
	});
	$("#contact_li").click(function(){
		$('html,body').animate({
			scrollTop: $(".contact").offset().top},
			1000);
	});

		 // hide #back-top first
	 $("#back-top").hide();
	 
	 // fade in #back-top
	 $(function () {
	  $(window).scroll(function () {
	   if ($(this).scrollTop() > 100) {
		$('#back-top').fadeIn();
	   } else {
		$('#back-top').fadeOut();
	   }
	  });
	  // scroll body to 0px on click
	  $('#back-top').click(function () {
	   $('body,html').animate({
		scrollTop: 0
	   }, 800);
	   return false;
	  });
	 });

var room = document.getElementById("room"),
    checkbox = document.getElementById("checkbox");

function toggleSwitch(){
	  if (checkbox.checked){
      room.className="room on";
    }else{
      room.className="room";
    }
}

checkbox.addEventListener("click", toggleSwitch);

});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#mainNav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#mainNav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}