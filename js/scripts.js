var suits = ["Clubs","Diamonds","Hearts","Spades"]
var ranks = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"]
var cardNames = []
var firstJokerIndex = randomInt(0,51)
var secondJokerIndex = randomInt(0,51)

while (firstJokerIndex===secondJokerIndex) {
  secondJokerIndex = randomInt(0,51)
}
console.log(firstJokerIndex + " " + secondJokerIndex)
var sorted = [firstJokerIndex,secondJokerIndex].sort(function(a,b){
  return a-b;
})
console.log(sorted)
firstJokerIndex = sorted[0]
secondJokerIndex = sorted[1]
suits.forEach(function(suit){
  ranks.forEach(function(rank){
    cardNames.push(rank + " of " + suit)
  })
})
cardNames.splice(firstJokerIndex,0,"<span style='color:green'>Joker</span>")
cardNames.splice(secondJokerIndex,0,"<span style='color:green'>Joker</span>")
$(document).ready(function(){
  $('body').append("<ol></ol>")
  cardNames.forEach(function(cardName){
    var cardIndex = cardNames.indexOf(cardName)
    $('body:nth-child(2) ol').append("<li>"+cardName+"</li>")
  })
})
function randomInt(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
