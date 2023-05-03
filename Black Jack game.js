
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let sumEl= document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let cardEl= document.getElementById("cards-el")
let player = {
     chips: 1300,
     name: 'Waydon'
}
 
let playerEl = document.getElementById('player-el')
playerEl.textContext = player.name + ': $'+ player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber > 10){
        return 10 
    } if( randomNumber === 1 ){
        return 11
    }else { 
        return randomNumber
    }
}


function rendergame(){
    cardEl.textContent =" Cards: "
    for( let w = 0; w < cards.length; w++){
         cardEl.textContent +=  cards[w] +' '
    }
    sumEl.textContent = 'Sum: '+ sum
if( sum <= 20){
    message ="Do you want to draw a new card?"
}else if(sum === 21){
    message = "Wohoo! YOU have got Blackjack!"
    hasBlackJack = false
}else if(sum > 21){
message = 'You are out!'
 isAlive = false

 }

function startgame(){
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard + secondcard]
    sum = firstcard + secondcard   
    isAlive = true
    rendergame()

}
messageEl.textContent = message
}
function newCard(){
    if (isAlive === true & hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        rendergame()  
        
    }
}
/*let flooredNumber = Math.floor(Math.random()*6)+1


console.log(flooredNumber)*/
/*function rollDice(){
    let randomNumber = Math.floor(Math.random()*6)+1
    return randomNumber
}
console.log(rollDice())*/
/*let course = {
    title: 'learn CSS Grid for free',
    lesson:16,
    creator: 'your mom',
    length:'too long in milimetres',
    level: 'rock hard',
    isFree: true,
    tags:["html", 'css']

}
console.log( course.creator)*/
/*let airBnB = {
    title: "Castle Listing",
    pricing: "$350",
    openForBooking: true,
    tag:['4guest','1bedroom','2beds','privateHalfBath']

}
console.log(airBnB.pricing)
console.log(airBnB.tag)*/









/*let player1Time = 153
let player2Time = 294

/*function getFastestRaceTime(){
    if (player1Time < player2Time){
        return player1Time
    } else if (player2Time < player1Time){
        return player2Time
    } else{
        return player1Time
    }
}
let fastestRace = getFastestRaceTime()
console.log(fastestRace)*/
/*let hasCompletedCourse = true
let givesCertificate = true
 if (hasCompletedCourse === true && givesCertificate === true){
    if (givesCertificate === true){
        generateCertificate()
    }
 }

function generateCertificate() {
    console.log("Generating certificate....")
}*/
/*let hasSolvedChallenge = false
let hasHintsLeft = false
if ( hasSolvedChallenge === false && hasHintsLeft === false){
    console.log(showSolution())
}


function showSolution() {
    console.log("Showing the solution....")
}*/
/*let likesDocumentaries = true
let likesStartups = false
if ( likesDocumentaries === false || likesStartups === false){
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}*/

  

 

