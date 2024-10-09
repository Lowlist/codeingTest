function solution(rsp) {
    let answer = [];
    let num = rsp.split("")

    for(let i=0;i < num.length;i++){
        if(num[i] === "2"){
            answer.push("0");
        }
        if(num[i] === "0"){
            answer.push("5");
        }
        if(num[i] === "5"){
            answer.push("2");
        }
    }
    return answer.join("");
}