
var powerOn = $('#powerOn');
var screen = $('#screen');
// var screenText = $('#screenText')
powerOn.on('click', function(){
	screen.text("Welcome");
})


var powerOff = $('#powerOff');

powerOff.on('click', function(){
	screen.text("Goodbye");
})


var milkButton = $('#milkButton');

milkButton.on('click', function(){
	alert("choose the quantity you want");
})

var quarter = $('#quantity1');

quarter.on('click', function(){
	alert('plese wait 3 seconds');
	setTimeout(function(){
		alert('here is your cup');
	},3000)
});

var half = $('#quantity2');
half.on('click', function(){
	alert('plese wait 6 seconds');
	setTimeout(function(){
		alert('here is your cup');
	},6000)
});

var threeQuarters = $('#quantity3');
threeQuarters.on('click', function(){
	alert('plese wait 9 seconds');
	setTimeout(function(){
		alert('here is your cup');
	},9000)
});



var coffee = $('#coffeeButton');
coffee.on('click', function(){
	alert('plese wait 5 seconds');
	setTimeout(function(){
		alert('here is your coffee');
	},5000)
});





	
	













	
	