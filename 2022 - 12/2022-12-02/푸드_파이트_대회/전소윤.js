function solution(food) {
    let answer = [];
    let leftfood = [];
    
    for(let i = 1; i < food.length; i++){
        if(food[i] >= 2){
            const foodlist = Math.floor(food[i] / 2);
            leftfood.push(String(i).repeat(foodlist));
        }
    }
    answer = [leftfood.join(""), 0, leftfood.reverse().join("")];
    return answer.join("");
}

// 풀이
// 주어진 매개변수의 수를 생수가 오는 가운데를 0으로 기점으로 나눴을 때,
// left와 right는 똑같은 문자열을 뒤집은 차이이기 때문에 left 변수를 만들어
// food의 i값이 2와 같거나 2보다 클 때, 2로 나눠서 소수점 자리는 Math.floor()로 버리고 foodlist에 넣어준다.
// 그리고 leftfood에 문자열로 만들어준 i를 push하고 repeat()로 foodlist에 담았던 2로 나눴던 몫을 반복해준다.
// answer 배열에 leftfood, 0 ,leftfood.reverse() 를 넣고 문자열로 치환한다.
