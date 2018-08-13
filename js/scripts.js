var suits = ["Clubs","Diamonds","Hearts","Spades"]
var ranks = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"]
var cardNames = []
suits.forEach(function(suit){
  ranks.forEach(function(rank){
    cardNames.push(rank + " of " + suit)
  })
})
$(document).ready(function(){
  $('body').append("<ul></ul>")
  cardNames.forEach(function(cardName){
    console.log("trying " + cardName)
    $('body:nth-child(2)').append("<li>"+cardName+"</li>")
  })
})
