// Problem : https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
// Author : Biruk Yemane Habteselassie

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let splitPoint;
    if(K % A.length === 0){
        return A;
    } else {
        splitPoint = K % A.length;
    }
    
    let firstPart = A.slice(0,A.length-splitPoint);
    let lastPart = A.slice(A.length-splitPoint);
    return lastPart.concat(firstPart);  
}