$(window).on("load", function(){
	let unavailable = JSON.parse(localStorage.getItem("seat"));

	unavailable.forEach(function(id){
		document.getElementById(id).classList.add("disable");
		document.getElementById(id).style.pointerEvents = "none";
	})
})

$(".box").click("onclick", function(){
	$(this).toggleClass( "seat" ).toggleClass( "taken" );

	let countTaken = $(".taken").length;
	let billing = countTaken * 250;
	$(".amount").text(billing);
})



/*Saving chosen seat*/
$(".confirmbutton").on("click", function(){ 

	let reserved = JSON.parse(localStorage.getItem("seat"));
	let now = [];

	if (reserved == undefined) {
		reserved = [];
	} 

	$(".taken").each(function(index){
		reserved.push( $( this ).attr("id") );
		now.push( $( this ).attr("id") );

	})

	let amount = $(".amount").text();

	localStorage.setItem("seat", JSON.stringify(reserved)); 
	localStorage.setItem("now", JSON.stringify(now)); 
	localStorage.setItem("amount", amount);

})






