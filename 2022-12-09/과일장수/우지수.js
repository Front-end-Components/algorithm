function solution(k, m, score) {
    let answer = 0;
    // score 내림차순으로 정렬
    score.sort((a, b) => b - a);
    
    // m번째 수 만큼 곱해서 answer에 더하기
    for(let i = m-1; i < score.length; i += m){
        answer += score[i] * m;
    }

    return answer;
}
