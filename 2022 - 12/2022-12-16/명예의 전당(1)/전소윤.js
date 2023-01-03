function solution(k, score) {
    var answer = [];
    var nums = [];
    
    // 점수가 담긴 순회한다.
    score.forEach(num => {
        // 명예의 전당 배열에 점수를 넣는다.
        nums.push(num);
        
        // 내림차순으로 정렬후, 상위 k번까지 자른다.
        nums.sort((a,b) => b-a).splice(k);
        
        // 배열의 가장 낮은 값(마지막 값)을 answer에 담는다.
        answer.push(nums[nums.length - 1]);
    });
    return answer;
}
