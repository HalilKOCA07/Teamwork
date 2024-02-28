//! ASIGNS = DEĞİŞKENLER TANIMLAMA
let scoreFirstPlayer = 0
let scoreSecondPlayer = 0


const playerOneScore = document.querySelector(".player1")
const playerTwoScore = document.querySelector(".player2")

const playerOneBtn = document.querySelector(".player1-btn")
const playerTwoBtn = document.querySelector(".player2-btn")
const reset = document.querySelector(".reset")

const scoreToWin = document.querySelector("#score-to-win")

const winner = document.querySelector("#winner i")
const loser = document.querySelector("#loser i")


                  //! ======  FOR ENABLED BUTTONS =======
playerOneBtn.disabled = true
playerTwoBtn.disabled = true
reset.disabled = true


            function enableBtn (){
                playerOneBtn.removeAttribute("disabled")
                playerTwoBtn.removeAttribute("disabled")
                reset.removeAttribute("disabled")
            }
            scoreToWin.addEventListener("change", enableBtn)



                              // ======  CONDITION FOR RUNNING BUTTONS =======
if (scoreFirstPlayer <= scoreToWin.value && scoreSecondPlayer <= scoreToWin.value){

                    //! ======  FIRST PLAYER BUTTON =======
    playerOneBtn.addEventListener("click", scoreOneFunction);
    function scoreOneFunction (){
        scoreFirstPlayer += 1;
        playerOneScore.textContent = scoreFirstPlayer;
        if(playerOneScore.textContent == scoreToWin.value){
            winner.textContent = playerOneBtn.textContent
            winner.classList.add("fa-thumbs-up")
            loser.textContent = playerTwoBtn.textContent
            loser.classList.add("fa-thumbs-down")

            playerOneScore.classList.add("text-success")
            playerTwoScore.classList.add("text-danger")

            playerOneBtn.disabled = true
            playerTwoBtn.disabled = true
        }
    }
                  //! ======  SECOND PLAYER BUTTON =======
    playerTwoBtn.addEventListener("click", scoreTwoFunction);
    function scoreTwoFunction (){
        scoreSecondPlayer += 1;
        playerTwoScore.textContent = scoreSecondPlayer;
        if(playerTwoScore.textContent == scoreToWin.value){
            winner.textContent = playerTwoBtn.textContent
            winner.classList.add("fa-thumbs-up")
            loser.textContent = playerOneBtn.textContent
            loser.classList.add("fa-thumbs-down")

            playerTwoScore.classList.add("text-success")
            playerOneScore.classList.add("text-danger")

            playerOneBtn.disabled = true
            playerTwoBtn.disabled = true
        }
    }


}


                 //! ======  RESET BUTTON =======
reset.addEventListener("click", resetFunction);
function resetFunction (){

    playerOneScore.textContent = 0
    playerTwoScore.textContent = 0
    playerTwoScore.classList.add("text-dark")
    playerOneScore.classList.add("text-dark")
    scoreToWin.value = ""
    winner.textContent = ""
    winner.classList.remove("fa-thumbs-up")
    loser.textContent = ""
    loser.classList.remove("fa-thumbs-down")
    scoreFirstPlayer = 0
    scoreSecondPlayer = 0
}