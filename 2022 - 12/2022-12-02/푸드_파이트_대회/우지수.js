function solution(food) {
    let arr = [];
    let answer = [];
    // food 배열 짝수로 만들기
    for(let i = 1; i < food.length; i++){
        if(food[i] % 2 !== 0){
            food[i] = food[i] - 1;
        }
    }
    
    // food 배열 요소 절반으로 쪼개기
    for(let i = 1; i < food.length; i++){
        food[i] = food[i] / 2;
        console.log(food);
    }
    
    // arr에 절반만큼 i 넣기
    for(let i = 1; i < food.length; i++){
        let cnt = 0;
        while(cnt < food[i]){
         arr.push(i);
         cnt++;
      }
    }
    
    // answer에 arr 넣고, 0 넣고, 뒤집은 arr 넣기
    answer.push(...arr);
    answer.push(0);
    answer.push(...arr.reverse());
    
    // join하여 return
    return answer.join('');
}
