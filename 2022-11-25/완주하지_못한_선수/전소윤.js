function solution(participant, completion) {
    // 각 배열을 순차적으로 정렬한다.
    participant.sort();
    completion.sort();
    
    // 경기에 참가한 선수 배열 기준으로 완주한 선수 배열을 반복문으로 비교한다.
    for (let i = 0; i < participant.length; i++){
        // 참가한 선수와 완주한 선수의 i값이 일치하지 않을 때, 일치 하지 않는 i 값을 반환한다.
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}
