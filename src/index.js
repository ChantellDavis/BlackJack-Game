let cardOne = 5
let cardTwo = 10
let cards = [cardOne, cardTwo]
let sum = cardOne + cardTwo
let isAlive = true
let hasBlackJack = false

let messageEl = document.querySelector("#message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")
let message = " "
  
let startGameBtn = document.querySelector("#start-game-btn")
startGameBtn.addEventListener("click", startGame)

function startGame(){
    let getRandomNumber = Math.floor(Math.random()*13) + 1
    renderGame()
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


let newCardBtn = document.querySelector("#new-card-btn")
newCardBtn.addEventListener("click", newCard)

function newCard(){
    let cardThree = 6
    sum += cardThree
    cards.push(cardThree)
    renderGame()
}