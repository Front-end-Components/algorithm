function solution(ingredient) {
    let answer = 0;
    let stack = [];
    
    // 스텍을 이용하여 ingredient 탐색
    for (let x of ingredient) {
        // 입력되는 값 스텍에 넣기
        stack.push(x);
        // 스택의 길이가 4개 이상일 때, 1231 빵,야채,고기,빵을 찾아서 스택에서 제거
        if (stack.length >= 4) {
            // 제거할 햄버거 변수를 선언.
            // 스택의 마지막 4번째까지 찾아서 문자열로 만들어 줌
            const hamburger = stack.slice(-4).join('');
            // 1231 빵,야채,고기,빵일 때
            if (hamburger === '1231') {
                // 완성된 햄버거는 스택에서 제거 후 카운트
                stack.splice(-4);
                answer++;
            }
        }
    }
    return answer;
}
