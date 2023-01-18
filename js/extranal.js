 
 /////////////........navbar fixed
	$(window).scroll(function(){
	
	$('nav').toggleClass('scrolled', $(this).scrollTop() >80);
	$('nav').toggleClass('scrolledd', $(this).scrollTop() >700);
	$('nav').toggleClass('scrolleddd', $(this).scrollTop() >850);
});
	
	
	
	
	
	
	
	/////////////........navbar dropdown
	
	
	
	$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(400);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(400);
});
		
		
		
		
		
		
		
		
	/////////////........slide 
		
		$('.carousel[data-type="multi"] .item').each(function() {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	for (var i = 0; i < 2; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}

		next.children(':first-child').clone().appendTo($(this));
	}
});

		
		
		
		
		
		
		
		
	/////////////........mobile menu modal
		
		
		function mobile(){
				var modal = document.getElementById("mobile");
				var span = document.getElementsByClassName("close")[0];
				  modal.style.display = "block";
				span.onclick = function() {
				  modal.style.display = "none";
				}
				window.onclick = function(event) {
				  if (event.target == modal) {
					modal.style.display = "none";
				  }
				}
				return false;
				}
		   
		
		
		
		
		
		
		
/////////////...................back to top
		
		
		
		
				const scrollToTopButton = document.getElementById('js-top');
			

			window.addEventListener('scroll', () => {
			  // Get the current scroll value
			  let ye = window.scrollY;
			  if (ye > 100) {
				scrollToTopButton.style.bottom = '10px'
			  } else {
				scrollToTopButton.style.bottom = '-200px'
			  }
			})
		
	/////////////...................currancy dropp
		$(".d-m li a").click(function(){
  $(this).parents(".dp").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dp").find('.btn').val($(this).data('value'));
});
		
		
		
		
		
		
		
		
		
		   






/////////////........content animate

  AOS.init();
/////////////........video popup
function videoPopup(objectName, videoUrl){
  this.videoUrl= videoUrl;
  this.screenSize= $(window).width();
  this.heightOfVideo= this.screenSize * .4;
  this.videoPop= '<div class="popUpWrapper">'+
                    '<div id="videoWrap"">'+
                    '<button type="button" class="videoClose" onclick="'+objectName+'.closeVideo()">X</button>'+
                    '<iframe width="100%" height="'+this.heightOfVideo+'" src="'+this.videoUrl+'" frameborder="0" allowfullscreen></iframe></div>'+
                  '</div>', 
  this.closeVideo= function(){
    $('.blackOut').fadeOut('slow');
    $('.popupAlignCenter').html("");
  },
  this.launchPopUp= function(){
    $(window).scroll(function() { return false; });
    if($('.blackOut').css('display')=="none"){
        $('.blackOut').fadeIn('slow');
    }
    $('.blackOut').css('z-index','1000');
    $('.popupAlignCenter').html(this.videoPop);
    $('.popUpWrapper').fadeIn('slow'); 
  }
};

$(document).mouseup(function (e) {
  var container = $(".popUpWrapper");
  if($('.blackOut').css('z-index')!="0"){
    if (!container.is(e.target) && container.has(e.target).length === 0){
      $('.blackOut').fadeOut('slow');
     }
  }
});

var videoPopupItem= new videoPopup('videoPopupItem', 'https://www.youtube.com/embed/c__AD5FsjlE');

/////////////........best offer text roted
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #388DFF }";
  document.body.appendChild(css);
};




