function solution(array, n) {
    var answer = array.filter((a)=>n === a).length;
    return answer;
}