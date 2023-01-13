function solution(today, terms, privacies) {
    let answer = [];
    let termsList = {};
    // 오늘 날짜 new Date로 날짜로 치환
    const todayDate = new Date(today);
    // 반복문으로 termsList 객체에 terms 넣기
    // { [A:6] ... }
    for (let x of terms){
        const [term, month] = x.split(' ');
        termsList[term] = Number(month);
    }
    // 반복문으로 privacies도 객체화 시켜주기
    // [ [2021.05.02:A] ... ]
    privacies.forEach((x, i) => {
        const [date, type] = x.split(' ');
        // new Date로 날짜 치환
        const register = new Date(date);
        // setMonth는 만들고 싶은 날짜로 세팅하는 것
        // getMonth(5) + termsList[6] = 11을 month에 세팅해 줌
        // A는 11월에 유효기간이 끝나야 했던 것
        register.setMonth(register.getMonth() + termsList[type]);
        // 만약 오늘 날짜가 register보다 크거나 같다면 해당 index push
        if(todayDate >= register) answer.push(i + 1);
    })
    
    return answer;
}
