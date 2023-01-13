function solution(id_list, report, k) {
    // 모든 값이 0인 새로운 배열 생성
    const answer = new Array(id_list.length).fill(0);
    const reports = {};
    
    // report 탐색하여 신고 리스트 split로 나눠줌
    report.map(user => {
        const arr = user.split(" ");
        // reports 배열에 신고한 유저가 있다면, 나머지 중복된 신고자 넣기 
        if (reports[arr[1]]){
            // 신고한 유저에 신고 받은 유저가 포함되지 않았다면
            if (!reports[arr[1]].includes(arr[0])) {
                // 신고한 유저 넣기
                reports[arr[1]].push(arr[0]);  
            }
        // reports 배열에 셋팅
        // 신고한 유저가 없다면 신고 받은 유저 : [신고한 유저] 로 넣기
        } else {
            reports[arr[1]] = [arr[0]]
        }
    });
    
    // reports를 탐색하여 k번 보다 같거나 클때
    // answer에 해당 유저를 신고한 유저가 받은 메일을 수를 +1 해준다
    for (let user in reports){
        if (reports[user].length >= k) {
            reports[user].map(el => {
                answer[id_list.indexOf(el)] += 1;
            })
        }
    }
    return answer;
}
