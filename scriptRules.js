let board = ['','','','','','','','','']
let playerTime=0
let symbols=['o','x']

function handleMove(position){
    board[position] = symbols[playerTime]
    let winner = win()
    if (winner == false){
        if (playerTime == 0){
            playerTime = 1
        }else{
            playerTime = 0
        }
    }
    return winner    
}

function win(){
    winPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
    for (let i=0 ; i<winPositions.length ; i++){
        let seq = winPositions[i]
        winPosition1=seq[0]
        winPosition2=seq[1]
        winPosition3=seq[2]
        if (board[winPosition1] == board[winPosition2] 
            && board[winPosition1] == board[winPosition3] 
            && board[winPosition1]!=''
            ){
            return true
        }
        }
    return false    
}   

function reset(){
    for (let i = 0; i < board.length; i++){
        board[i]=''
        playerTime = 0
        winner = false
    }
}