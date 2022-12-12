function solution(dartResult) {
    var answer = [];
    let score = 0;
    let sum = 0;
    
    for(let i = 0; i < dartResult.length; i++) {
        if (!isNaN(dartResult[i])) {
            score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
        } // 보너스 S
        else if(dartResult[i] === 'S') {
            answer.push(score);
        } // 보너스 D
        else if(dartResult[i] === 'D') {
            answer.push(Math.pow(score, 2));
        } // 보너스 T
        else if(dartResult[i] === 'T'){
            answer.push(Math.pow(score, 3));
        } // 옵션 #
        else if(dartResult[i] == '#') {
            answer[answer.length - 1] *= -1;
        } // 옵션 *
        else if(dartResult[i] == '*') {
            answer[answer.length - 1] *= 2;
            answer[answer.length - 2] *= 2;
        }
    }
    console.log(answer);
    for(let j = 0; j < answer.length; j++) {
        sum += Number(answer[j]);
    }
    return sum;
}

// 풀이
// 문자열 반복문을 돌며 점수일 경우, 10점일때 i-1 배열의 값이 1인지 판별 
// score에 점수 저장 후, 보너스 조건에 따라 제곱근 연산을 해주고 answer에 넣는다.
// 옵션은 answer에 값을 해당 옵션 조건에 따라 연산하고 저장한다.
// 그리고 다시 반복문을 통해 sum에 숫자형으로 바꿔서 더해주었다.
