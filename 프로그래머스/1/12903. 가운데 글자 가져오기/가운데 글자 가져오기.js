function solution(s) {
    if(s.length % 2){
        return s.substring(s.length/2, s.length/2+1)
    }else{
        return s.substring(s.length/2-1, s.length/2+1)
    }
}