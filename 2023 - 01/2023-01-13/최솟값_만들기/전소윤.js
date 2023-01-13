function solution(A,B){
    let answer = 0;
  
    // sort 함수를 이용하여 A는 내림차 순으로 정렬하고, B는 오름차 순으로 정렬한다.
    // 짝꿍되는 숫자는 가장 작은 수와 가장 큰수 > 그다음 작은 수와 큰 수 이런식으로 정렬
    A.sort((a,b) => a - b);
    B.sort((a,b) => b - a);
  
    //정렬해준 후, 반복문을 통해 A와 B를 곱해서 answer에 누적하여 더해준다.
    for (let i = 0; i < B.length; i++){
        answer += B[i] * A[i];
    }
    
    return answer;
}
