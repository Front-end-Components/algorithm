function solution(survey, choices) {
  let type = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0
  }

  for (let i = 0; i < survey.length; i++) {
    if (choices[i] - 4 >= 0) {
      type[survey[i][1]] += choices[i] - 4;
    } else {
      type[survey[i][0]] += 4 - choices[i];
    }
  }

  let result = '';
  type['R'] >= type['T'] ? result += 'R' : result += 'T';
  type['C'] >= type['F'] ? result += 'C' : result += 'F';
  type['J'] >= type['M'] ? result += 'J' : result += 'M';
  type['A'] >= type['N'] ? result += 'A' : result += 'N';

  return result;
}