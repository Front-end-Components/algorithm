// 시간 초과뜬 코드
// function solution(ingredient) {
//     let burger = [...ingredient];
//     let answer = 0;

//     while(burger.length > 3){
//         for(let i = 0; i < burger.length; i++){
//             if(burger[i] === 1
//                && burger[i + 1] === 2
//                && burger[i + 2] === 3
//                && burger[i + 3] === 1)
//             {
//                 burger.splice(i, 4);
//                 answer++;
//             }
//         }
//         if(burger.length === ingredient.length) break;
//     }

//     return answer;
function solution(ingredient) {
  let burger = [...ingredient]; //ingredient를 얕은 복사해줬는데 안해줘도 되긴함
  let answer = 0;

  // burger 길이만큼 반복해 연속해서 1231이 나오는 조건에
  // 1231 부분을 삭제하고 answer를 올려준 뒤, i에서 3을 뺀 부분부터 다시 반복문을 돌린다.
  for (let i = 0; i < burger.length; i++) {
    if (
      burger[i] === 1 &&
      burger[i + 1] === 2 &&
      burger[i + 2] === 3 &&
      burger[i + 3] === 1
    ) {
      burger.splice(i, 4);
      answer++;
      i -= 3;
    }
  }

  return answer;
}
