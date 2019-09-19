
var buttons = {

  powerButtonToggle: false,
  

  toggle: function(){
    this.powerButtonToggle = !this.powerButtonToggle;
  }
}


$('#powerButton').on('click', function(){
  
  buttons.toggle(buttons.powerButtonToggle)


  if(buttons.powerButtonToggle === true) {
     return 'Good morning!';
  } else {
    return 'Goodbye!'
  }
});