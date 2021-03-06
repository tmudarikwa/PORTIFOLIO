$("#portfoliodetail").css("height",80/100 *  (window.innerHeight)+"px")
var slideDirection = "right";
//setting portfolio details degault page visibility
function setVisibility(slideDirection){
  $('#portfoliodetails').children().hide();
  $('#portfoliodetails').children('.active').show("slide", { direction: slideDirection}, 1000);;
}
setVisibility(slideDirection);
//if we only have when item on the project details page we don't show the NEXT button
if($('#portfoliodetails').children().length <= 1) $("#nextportfoliobtn").hide();

//navigation through a selected projects details (when a user clicks on a projects image whilst on /portfolio)
$('.portfoliodetail button').click(function(){
  var direction = $(this).text();
  var currentItem = $('#portfoliodetails').children('.active').attr('id');
  var nextItem = 0, prevItem = 0;

  if(direction.startsWith('NEXT')) nextItem = parseInt(currentItem) + 1;
  if(direction.startsWith('NEXT')) slideDirection = "right";
  if(direction.startsWith('PREVIOUS')) prevItem = parseInt(currentItem) - 1;
  if(direction.startsWith('PREVIOUS')) slideDirection = "left";

  //checking if nextItem id exists
  var checkNextItem = $('#portfoliodetails').has("#"+nextItem+"").length;
  var checkPrevItem = $('#portfoliodetails').has("#"+prevItem+"").length;

  var numOfItems = $('#portfoliodetails').children().length;

  //displaying next or prev item
  if(checkNextItem == 1 && nextItem > 1 && nextItem < numOfItems && direction.startsWith('NEXT')){
    $("#portfoliodetails #"+nextItem+"").addClass('active');
    $("#previousportfoliobtn").show();
  }else if(checkNextItem == 1 && nextItem == numOfItems && direction.startsWith('NEXT')){
    $("#portfoliodetails #"+nextItem+"").addClass('active');
    $("#previousportfoliobtn").show();
    $("#nextportfoliobtn").hide();
  }else if(checkPrevItem == 1 && prevItem == 1 && direction.startsWith('PREVIOUS')){
    $("#portfoliodetails #"+prevItem+"").addClass('active');
    $("#previousportfoliobtn").hide();
    $("#nextportfoliobtn").show();
  }else if(checkPrevItem == 1 && prevItem > 1 && direction.startsWith('PREVIOUS')){
    $("#portfoliodetails #"+prevItem+"").addClass('active');
    $("#previousportfoliobtn").show();
    $("#nextportfoliobtn").show();
  }

  //removing active class from currentItem
  $("#portfoliodetails #"+currentItem+"").removeClass('active');
  //setting Visibility
  setVisibility(slideDirection);
});

//back button routing
$('#backbtn').click(function(){
  var currentHref = (window.location.href).slice(31);
  window.location.href = ""+currentHref.slice(0,10)+"#"+currentHref.slice(11);

})
