function solution(t, p) {
    let answer = 0;
    // num은 비교 대상 숫자
    let num = 0;
    // left 초기값 = 0
    let left = 0;
    // right 초기값 = p의 길이 - 1
    // 반복 될 때마다 left와 right 값이 1씩 증가시켜주기
    for(let right = p.length-1; right < t.length; right++){
        // left와 right의 범위만큼 slice 값을 num에 할당
        num = t.slice(left, right + 1);
        // num이 p보다 작거나 같을 때 마다 answer++
        if(num <= p){
            answer++
        }
        left++;
    }
    return answer;
}
