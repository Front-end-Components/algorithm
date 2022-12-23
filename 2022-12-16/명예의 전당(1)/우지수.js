function solution(k, score) {
    let answer = [];
    // 점수를 담는 배열
    let temp = [];
    
    for(let i = 0; i < score.length; i++){
        // k 이전 까지는 제일 작은 값이 answer에 들어갑니다.
        if(i < k){
            temp.push(score[i]);
            temp.sort((a, b) => a - b);
            answer.push(temp[0]);
        // k 이후에는 정렬 이후 뒤에서 k번째 수를 answer에 넣습니다.
        } else {
            temp.push(score[i])
            temp.sort((a, b) => a - b);
            answer.push(temp[temp.length-k])
        }
    }  
    return answer;
}
