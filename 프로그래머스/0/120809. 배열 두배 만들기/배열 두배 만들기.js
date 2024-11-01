function solution(numbers) {
    var answer = [];
    numbers.map((a,i)=>answer.push(numbers[i]*2));
    return answer;
}