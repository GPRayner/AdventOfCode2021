export const part2 = (input: string[]) => {
  const numbers = input[0].split(",");
  const boards = PopulateBoards(input);
  let totalBoards = boards.length;
  let winners = new Set();
  for (const number of numbers) {
    let boardi = 0;
    for (const board of boards) {  
      SetResult(board, number);
      if (CheckWinner(board)) {
        winners.add(boardi)
        if(totalBoards == winners.size)
        {
          return GetSum(board) * parseInt(number);
        }
      }
      boardi++;
    }
  }
};

const SetResult = (board: string[][], number: string) => {
    board.forEach((row, ri) => {
      row.forEach((col, ci) => {
        if(col === number)
        {
          board[ri][ci] = "X";
        }
      });
    });
};

const GetSum = (board: string[][]) => {
     let sum = 0;
    board.forEach(row => {
      row.forEach(col => {
        if(col !== "X"){
          sum += parseInt(col);
        }
      })
    });
    return sum;
};

const CheckWinner = (board: string[][]) => {
  let winner = false;
  board.forEach(rows => {
    if (rows.every(e => e === "X")) {
      winner = true;
    }
  })
  for (let col = 0; col < board[0].length; col++) {
    if (board.map(a => a[col]).every(e => e === "X")) {
      winner = true;
    }
  }
  return winner;
};

const PopulateBoards = (input: string[]) => {
  let boards = new Array();
  let boardIndex = 0;
  let boardRow = 0;
  boards[boardIndex] = new Array();
  input.slice(2).forEach(row => {
    
    if (row === "") {
      boardIndex++;
      boardRow = 0;  
      boards[boardIndex] = new Array();
    }
    else{
      var values = row.trim().split(/\s+/);
      boards[boardIndex][boardRow] = new Array();
      values.forEach((value, index) => {
        boards[boardIndex][boardRow][index] = value;
      });
      boardRow++;
    }
  });
  return boards;
};

