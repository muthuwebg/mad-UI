function initSwiper() {
	var swiper = new Swiper('.banner-swiper', {
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
	});

	var treeSwiper = new Swiper('.tree-slider', {
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
		slidesPerView: window.innerWidth > 600 ? 3 : 1,
		spaceBetween: window.innerWidth > 600 ? 30 : 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}

function showEmployeData() {
	$(".emp-data").mouseover(function(e) {
		var $this = $(e.currentTarget);
		$(".emp-data").removeClass("pi-active");
		$this.addClass("pi-active");
		$(".emp-detail").addClass("hide");
		$('.'+$this.data("info")).removeClass("hide");
	});

	$(".emp-data").click(function(e) {
		var $this = $(e.currentTarget);
		$(".emp-data").removeClass("pi-active");
		$this.addClass("pi-active");
		$(".emp-detail").addClass("hide");
		$('.'+$this.data("info")).removeClass("hide");

		if (window.innerWidth < 600) {
			$('html, body').animate({
				scrollTop: $("."+$this.data("info")).offset().top
			}, 500);
		}
	});
}

function registerForm() {
	$(".reg-btn").click(function(e) {
		$("#register").modal();

		if($("#register").length) {
			var validator = $("#reg-form").validate({
				focusCleanup: true,
				focusInvalid: false,
				errorClass: "error",
				rules: {
					user: {
						required: true
					},
					company: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
				},
				errorPlacement: function(error, element) {
					error.appendTo($(element).closest(".form-group"));
				},
				highlight: function(element, errorClass) {
					$(element).addClass(errorClass);
				},
				unhighlight: function(element, errorClass) {
					$(element).removeClass(errorClass);
				},
			});

			$("#regSubmit").on("click", function(e) {
				e.preventDefault();

				if ($("#reg-form").valid()) {
					$("#reg-form").addClass("hide");
					$(".register-done").removeClass("hide");
				}
			});

			$("#register").on('hide.bs.modal', function() {
				validator.resetForm();
			});
		}

	});
}

function backToTop() {
	if ($(".back-to-top").length) {
		window.onscroll = function() {
			if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
				$(".back-to-top").fadeIn("slow");
			else
				$(".back-to-top").fadeOut("slow");
		};

		$(".back-to-top").on("click", function(e) {
			e.preventDefault();

			$("html, body").animate({
				scrollTop: 0,
			}, 1000);
		});
	}
}

function scrollMenu() {
	$(".sec-menu").on("click", function(e) {
		e.preventDefault();
		var $this = $(e.currentTarget);
		
		$('html, body').animate({
			scrollTop: $("."+$this.data("section")).offset().top
		}, 1000);
	});
}

function mobileMenu() {
	if (window.innerWidth < 600) {
		$(".hd-menu").addClass("collapse");
		$(".hb-menu").on("click", function(e) {
			e.preventDefault();
			$(".hd-menu").slideToggle("slow");
		});
	}
}

function init() {
	initSwiper();
	showEmployeData();
	registerForm();
	backToTop();
	scrollMenu();
	mobileMenu();
}

init();