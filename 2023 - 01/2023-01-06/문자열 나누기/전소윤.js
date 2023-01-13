function solution(s) {
    var answer = 0;
    let firstStr = '';
    let match = 0;
    let noMatch = 0;
    
    for(let x of s){
        // 일치 카운트와 노일치 카운트가 같을 때 answer 증가
        // 단어로 만들 첫 글자 x를 변수에 저장 
        if (match === noMatch) {
            // 초기화
            answer++;
            firstStr = x;
        }
        // 다음에 들어올 단어가 firstStr와 같을 때 match 증가
        if (firstStr === x) match++;
        // 다음에 들어올 단어가 firstStr와 다를 때 noMatch 증가
        else noMatch++;
    }
    return answer;
}
