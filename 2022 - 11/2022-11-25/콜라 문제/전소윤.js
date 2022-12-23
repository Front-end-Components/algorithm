function solution(a, b, n) {
    var answer = 0;
    
  // 소유한 콜라의 개수가 마트에서 교환 가능한 개수보다 작을때 까지 while문이 돌고,
    while(n >= a){
        // 소유한 콜라 / 교환 개수 * 교환 해준 콜라를 answer에 계속 누적
        answer += parseInt(n / a) * b
        // 소유하고 있는 콜라는 계속 줄어들기 때문에 남은 병 수 + 받은 병수에 나눠떨어지지 않은 나머지를 더한 만큼 남아있게 된다.
        n = parseInt(n / a) * b + (n % a);
    }
    return answer;
}
