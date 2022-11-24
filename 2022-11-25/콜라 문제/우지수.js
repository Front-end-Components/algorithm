function solution(a, b, n) {
    // 돌려 받는 콜라
    let coke = 0;
    // n이 a보다 크거나 같을 때 까지(바꿀 수 있을 때 까지)
    while(n >= a) {
	// n을 a로 나눈 수의 곱하기 b만큼 콜라로 바꿀 수 있다.(개수니까 내림처리)
        coke  += Math.floor(n/a)*b;
        // 나머지 빈 병의 갯수를 n에 새로 할당
        n = Math.floor(n/a)*b + n % a;
    }
    return coke;
}

