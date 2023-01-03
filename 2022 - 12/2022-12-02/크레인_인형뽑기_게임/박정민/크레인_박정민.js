function solution(board, moves) {
  let result = 0;
  let stack = [];
  const len = board.length;
  for(let i = 0; i < moves.length; i++) {
      for(let j = 0; j < len; j++) {
          if(board[j][moves[i] - 1] === 0) continue;
          else {
              stack.push(board[j][moves[i] - 1]);
              board[j][moves[i] - 1] = 0;
              break;
          }
      }
  }
  
  for(let a = 0; a < stack.length; a++) {
      if(stack[a] === stack[a + 1]) {
          result += 2;
          stack.splice(a, 2);
          a = -1;
      }
  }
  return result;
}