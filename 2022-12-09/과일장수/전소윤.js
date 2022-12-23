function solution(k, m, score) {
    let answer = 0;
    // 가장 점수가 높은 과일을 담아야 하기 때문에 오름차순 정렬한다.
    score.sort((a, b) => a - b);
    
    while(score.length >= m){
        // 박스에 m개만큼 담을수 있으니 마지막 배열부터 m개만큼 자른다.
        const box = score.splice(score.length - m, m);
        // (최저 사과 점수 * 사과 개수) while문이 돌면서 상자 개수를 누적해준다.
        const price = m * box[0];
        answer += price;
    }
    return answer;
}
