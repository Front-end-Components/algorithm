function solution(lottos, win_nums) {
    // 초기값
    // count = 최종 등수
    // zero = 0의 개수
    let count = 7;
    let zero = 0;
    
    for(let i = 0; i < 6; i++){
        // lottos 배열의 0 개수 세기
        if(lottos[i] === 0) zero++;
        for(let j = 0; j < 6; j++){
            // 두 배열 비교 후 일치하면 count--
            if(lottos[i] === win_nums[j]) count--;
        }
    }
    
    // count가 6을 초과한다면 count = 6
    if(count > 6) count = 6;
    let min = count;
    let max = min;
    
    // zero만큼 max--
    for(let i = 0; i < zero; i++){
        max--;
    }
    
    // 0이 6개일 경우 max = 1
    if(max === 0) max = 1;
    
    return [max, min];
}
