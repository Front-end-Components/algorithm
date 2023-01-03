function solution(number, limit, power) {
    let answer = 0;
    let divisor = [];
    
    // 약수를 세는 반복문
    for(let i = 1; i <= number; i++){
        let count = 0;
        // i의 절반만 돌리고 + 1을 해줍니다.
        for(let j = 1; j <= (i / 2); j++){
            if(i % j === 0){
                count++;
            }
        }
        divisor.push(count+1)
    }

    // limit을 넘는 수는 power로 변경하고 answer에 더해줍니다.
    for (let k = 0; k < divisor.length; k++){
        if(divisor[k] > limit){
            divisor[k] = power;
        }
        answer += divisor[k];
    }
    return answer;
}
