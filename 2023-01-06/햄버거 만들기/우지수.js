function solution(ingredient) {
    let answer = 0;
    let stack = [];
    // 반복문 실행하며 stack 배열에 넣기
    for(let i = 0; i < ingredient.length; i++){
        stack.push(ingredient[i])
        // stack 배열의 뒤에서 4개 요소가 1,2,3,1 이면 모두 삭제 후 answer++
        if(stack.slice(-4).join('') === '1231'){
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            answer++
        }
    }
    return answer;
}
