function solution(survey, choices) {
    let answer = [];
    // 점수 체크 객체 생성
    let score = {"R": 0,"T": 0,"C": 0,"F": 0,"J": 0,"M": 0,"A": 0,"N" :0}
    // servey의 첫번째부터 4보다 큰지 작은지 구분
    for(let i = 0; i < survey.length; i++){
        // 4보다 크다면 survey[i]의 두번째 글자에 점수 넣기
        // 점수는 -4 + choices[i]
        if(choices[i] > 4){
            let arr = survey[i].split('');
            score[arr[1]] += -4+choices[i];
        // 4보다 작다면 survey[i]의 첫번째 글자에 점수 넣기
        // 점수는 4 - choices[i]
        } else {
            let arr = survey[i].split('');
            score[arr[0]] += 4-choices[i];
        }
    }
    // 더 큰 값을 answer에 넣기
    // 같을 경우 앞에 있는 글자가 들어가도록 하기.
    if (score["R"] < score["T"]) answer.push("T") 
    else answer.push("R")
    
    if (score["C"] < score["F"]) answer.push("F")
    else answer.push("C")
    
    if (score["J"] < score["M"]) answer.push("M")
    else answer.push("J")
    
    if (score["A"] < score["N"]) answer.push("N")
    else answer.push("A")
    
    return answer.join('');
}
