/* 
QUIZ 1. 첫 글자를 대문자로 변경하기

str의 첫 글자를 대문자로 바꿔 반환하는 함수, ucFirst(str)를 만들어보세요. 함수 실행 결과는 아래 예시를 충족해야 합니다.
ucFirst("john") == "John";

*/

function ucFirst(name) {

    if (typeof name == 'string') {          // 1) 
        if(!name) return '';     // * 예외처리 - 1

        return name[0].toUpperCase() + name.slice(1);   // 2)
    }
    
}

alert( ucFirst() == "John" );


/* 
1) 전달된 인수의 자료형이 문자열이 맞는 지 확인 
2) 매개변수 name의 문자열 중 첫 번째만 대문자로 변경 | 매개변수 name의 문자열을 [1]번째 부터 출력
( j > J )
( ohn )
두 문자열을 병합 ( John )

* 예외 처리
1) 함수로 인수를 전달할 때 빈 문자열이라면, 빈 문자열을 반환하게 처리합니다.
빈 문자열을 인수로 전달하면, 대문자로 변환하는 과정에서 name[0]은 undefined가 됩니다.
이 자료형은 toUpperCase()를 지원하지 않기에 오류가 발생한다. 오류 발생 방지

!name == undefined, '', null, 0, false 등
*/