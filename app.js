/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
//hold each grid in the board

//hold score 
let board =[[], [], [], []]
let score = 0
let rows = 4
let colmns = 4
let idx = 0


/*------------------------ Cached Element References ------------------------*/
const gridEls = document.querySelectorAll(".grid")
/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener("keyup", (evt) => {
    if(evt.code == "AroowLeft"){
        shiftLeft()
    }
})


/*-------------------------------- Functions --------------------------------*/
//setup board, add all initiate value to each grid
//generate randome Integer in order to choose index 

window.onload = function(){
    init();
}

function init(){
    board = [
        [0, 2, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 16, 0],
        [0, 2048, 0, 0]
    ]
    // board = [
    //     [0, 0, 0, 0],
    //     [0, 0, 0, 0],
    //     [0, 0, 0, 0],
    //     [0, 0, 0, 0]
    // ]
    //iteral the board to update the grid data 
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < colmns; j++) {
            let num = board[i][j];
            let grid = document.querySelector(`#g${i}${j}`)
            updateGridStyle(grid, num);
        }
    }
    //create 2 to begin the game
}

function updateGridStyle(grid, num){
    //clear the value of grid
    grid.innertext = ""
    //clear the class list of grid(clear style)
    grid.classList.value = ""
    //add grid back
    grid.classList.add("grid")
    if(num>0){
        grid.innerText = num
        if(num<4096){
            grid.classList.add(`num${num.toString()}`)
        }
        else{
            grid.classList.add("X8192")
        }
    }
}
//shift ev
function shiftLeft(){
    for(let i=0; i<rows.length; i++ ){
        //a temporary array to hold current values in a row before shift
        let row = board[i]
        //get value after shifted a row 
        row = shift(row)
        //push the value back to the board row
        board[i] = row
    }
}