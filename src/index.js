let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let message = " "
let messageEl = document.querySelector("#message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")

  let startGameBtn = document.querySelector("#start-game-btn")
startGameBtn.addEventListener("click", startGame)

let newCardBtn = document.querySelector("#new-card-btn")
newCardBtn.addEventListener("click", newCard)

function startGame(){
    let cardOne = getRandomCards()
    let cardTwo = getRandomCards() 
     cards = [cardOne, cardTwo]
     sum = cardOne + cardTwo
    isAlive = true
    renderGame()
}

function getRandomCards(){
    let randomNumber = Math.floor(Math.random()* 13) + 1
    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}

function renderGame(){
    cardsEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length; i++)
    cardsEl.textContent += cards[i] + " "
    sumEl.textContent = "Sum: " + " " + sum
    if(sum <= 20){
        message = "Do you want another card?"
    }else if(sum === 21){
        message = "BlackJack!"
        hasBlackJack = true
    }else {
        message = "GameOver!"
        isAlive = false
    }
    messageEl.textContent = message
}




function newCard(){
    if(isAlive === true && hasBlackJack === false){
    let cardThree = getRandomCards()
    sum += cardThree
    cards.push(cardThree)
    renderGame()
    }
}