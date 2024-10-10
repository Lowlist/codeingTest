function solution(n) {
    let i;
    for(i=0;i<n;i++){
        if(n % i === 1){
            break;
        }
    }
    
    return i;
}