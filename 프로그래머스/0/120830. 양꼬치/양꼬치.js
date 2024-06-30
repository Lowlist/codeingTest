function solution(n, k) {
    
    for(i=1 ; i<=n ; i++){
        if(i % 10 == 0){
         k = k-1
        }
    }
    
    return answer = n*12000 + k*2000;
}