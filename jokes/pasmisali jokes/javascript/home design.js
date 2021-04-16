$(document).ready(function(){
 
 $( ".story" ).click(function() {
  $(".all_contents").css({"display": "none"}),
  $(".novel_menu").css({"display": "none"}),
  $(".poem_menu").css({"display": "none"}),
  $(".story_menu").css({"display": "block"}),
  $(".jokes_menu").css({"display": "none"}),
  $(".puzzle_menu").css({"display": "none"}),
  $(".quote_menu").css({"display": "none"}),
  $(".rhythm_menu").css({"display": "none"})
});
$( ".novel" ).click(function() {
  $(".all_contents").css({"display": "none"}),
  $(".novel_menu").css({"display": "block"}),
  $(".poem_menu").css({"display": "none"}),
  $(".story_menu").css({"display": "none"}),
  $(".jokes_menu").css({"display": "none"}),
  $(".puzzle_menu").css({"display": "none"}),
  $(".quote_menu").css({"display": "none"}),
  $(".rhythm_menu").css({"display": "none"})
});
$( ".poem" ).click(function() {
  $(".all_contents").css({"display": "none"}),
  $(".novel_menu").css({"display": "none"}),
  $(".story_menu").css({"display": "none"}),
  $(".poem_menu").css({"display": "block"}),
   $(".jokes_menu").css({"display": "none"}),
   $(".puzzle_menu").css({"display": "none"}),
   $(".quote_menu").css({"display": "none"}),
  $(".rhythm_menu").css({"display": "none"})
  
});

$( ".jokes" ).click(function() {
  $(".all_contents").css({"display": "none"}),
  $(".poem_menu").css({"display": "none"}),
  $(".novel_menu").css({"display": "none"}),
  $(".story_menu").css({"display": "none"}),
  $(".jokes_menu").css({"display": "block"}),
  $(".puzzle_menu").css({"display": "none"}),
  $(".quote_menu").css({"display": "none"}),
  $(".rhythm_menu").css({"display": "none"})
});

$( ".puzzle" ).click(function() {
  $(".all_contents").css({"display": "none"}),
  $(".novel_menu").css({"display": "none"}),
  $(".poem_menu").css({"display": "none"}),
  $(".story_menu").css({"display": "none"}),
  $(".jokes_menu").css({"display": "none"}),
  $(".puzzle_menu").css({"display": "block"}),
  $(".quote_menu").css({"display": "none"}),
  $(".rhythm_menu").css({"display": "none"})
});
 
$( ".rhythm" ).click(function() {
  $(".all_contents").css({"display": "none"}),
  $(".poem_menu").css({"display": "none"}),
  $(".novel_menu").css({"display": "none"}),
  $(".story_menu").css({"display": "none"}),
  $(".jokes_menu").css({"display": "none"}),
  $(".puzzle_menu").css({"display": "none"}),
  $(".rhythm_menu").css({"display": "block"}),
  $(".quote_menu").css({"display": "none"})
  
});
 
 $( ".quote" ).click(function() {
  $(".all_contents").css({"display": "none"}),
  $(".novel_menu").css({"display": "none"}),
  $(".poem_menu").css({"display": "none"}),
  $(".story_menu").css({"display": "none"}),
  $(".jokes_menu").css({"display": "none"}),
  $(".puzzle_menu").css({"display": "none"}),
  $(".rhythm_menu").css({"display": "none"}),
  $(".quote_menu").css({"display": "block"})
  
});
$( ".home_menu_nav" ).click(function() {
 
  $(".novel_menu").css({"display": "block"}),
  $(".poem_menu").css({"display": "block"}),
  $(".story_menu").css({"display": "block"}),
  $(".jokes_menu").css({"display": "block"}),
  $(".puzzle_menu").css({"display": "block"}),
  $(".rhythm_menu").css({"display": "block"}),
  $(".quote_menu").css({"display": "block"})
  
});
 
});

 