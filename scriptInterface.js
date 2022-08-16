document.addEventListener("DOMContentLoaded",()=>{

    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        square.addEventListener("click",handleClick)})

})

let botao = document.getElementById("bt")
botao.addEventListener("click",()=>{resetInterface()})

function handleClick(event){
    let square = event.target
    let position = square.id
    if(handleMove(position) == true){
        updateSquares()
        setTimeout(()=>{
            alert("O vencedor é " + symbols[playerTime] + "!")
        },10)
        setTimeout(()=>{resetInterface()},10)
    }
    updateSquares()

}

function updateSquares(){
    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        let position = square.id
        let symbol = board[position]
        
        if (board[position] != ''){
            square.innerHTML = `<div class="${symbol}"></div>`
        }
    })

}

function resetInterface(){
    reset()
    let squares = document.querySelectorAll(".square")
    squares.forEach((square)=>{square.innerHTML = `<div class=""></div>`})
}

