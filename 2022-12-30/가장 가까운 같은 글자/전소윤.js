function solution(s) {
    var answer = [];
    // 해싱하기 위해 map 생성
    const map = new Map();
    // 반복문을 돌리면서 일치하는 i가 없을 때 map에 i 셋팅
    for(let i = 0; i < s.length; i++){
        // map에 일치하는 i가 있을 때 if문 실행
        if (map.has(s[i])){
            // i번째 - s[i]를 빼주면 좌표값 확인
            answer.push(i - map.get(s[i]));
        } else {
          // 일치하는 i가 없을 때 -1 answer에 push
          answer.push(-1);
        }
        // map에 key value 해싱
        map.set(s[i], i);
    }
    return answer;
}
