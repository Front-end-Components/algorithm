function solution(n) {
    let answer = 1; 
    
    for(let start = 1; start < n/2; start++){
        let end = start;
        let sum = 0;
        while(sum <= n){
            sum += end;
            if(sum === n) answer++;
            end++;
        }
    }
    return answer;
}
