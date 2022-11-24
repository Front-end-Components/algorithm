function solution(n, lost, reserve) {
    // 모든 학생들이 체육복을 갖고 있다는 가정하에 학생의 인원만큼의 1이 나열 되어있는 배열을 만든다.
    const uniform = Array(n).fill(1);
    
    // 체육복을 잃어버린 학생의 배열번째를 0으로 바꾼다.
    lost.map((lost) => {uniform[lost - 1] = 0});
    
    // 여유분이 있는 학생의 배열번째를 +1 시켜준다.
    reserve.map(reserve => {uniform[reserve - 1] += 1});
    
   // 반복문을 돌려 앞과 비교하여 2를 나눠갖고, 뒤와 비교하여 2를 나눠 갖게 만든다.
    for(let i = 0; i < n; i++){
        // i번째 체육복이 0게인사람 && i-1번째(앞) 체육복이 2개인 사람
        if(uniform[i] === 0 && uniform[i - 1] === 2){
            uniform[i] = 1;
            uniform[i - 1] = 1;
        }
        // i번째 체육복이 0게인사람 && i+1번째(뒤) 체육복이 2개인 사람
        if(uniform[i] === 0 && uniform[i + 1] === 2){
            uniform[i] = 1;
            uniform[i + 1]=1;
        }
    }
    // uniform 배열의 1의 개수를 체크하여 반환한다.
    return uniform.filter(x => x >= 1).length;
}
