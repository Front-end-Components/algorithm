function solution(board, moves) {
    let answer = 0;
    let stack = [];
    
    // moves 배열만큼 반복
    for(let k = 0; k < moves.length; k++){
        j = moves[k]-1;
        
        for(let i = 0; i < board.length; i++){
        // 0인 경우는 무시
        if(board[i][j] === 0) continue;
            
        // 찾은 요소가 stack의 제일 상단과 같다면 제거하고 answer + 2
        if(board[i][j] === stack[stack.length-1]){
            stack.pop();
            answer += 2;
        // 아니라면 stack 배열에 push
        } else {
            stack.push(board[i][j]);
        }
        // 꺼낸 요소는 0으로 바꿔주기
        board[i][j] = 0;
        break;
        }
    }
    return answer;
}
