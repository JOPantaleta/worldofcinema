$(window).on("load", function(){

	$("#gcashscheme").hide();
	$("#cardscheme").hide();
	$("#paypalscheme").hide();
})

$("#cardpayment").on("click", function(){

	$("#gcashscheme").hide();
	$("#paypalscheme").hide();
	$("#cardscheme").show();
})

$("#gcash").on("click", function(){

	$("#cardscheme").hide();
	$("#paypalscheme").hide();
	$("#gcashscheme").show();
})

$("#paypal").on("click", function(){

	$("#cardscheme").hide();
	$("#gcashscheme").hide();
	$("#paypalscheme").show();
})

