/*
QUIZ 2.스팸 문자열 걸러내기

str에 'viagra’나 'XXX’라는 문자열이 있으면 true를 반환해주는 함수 checkSpam(str)을 만들어보세요.

* 해당 문자열이 없으면 false를 반환하면 됩니다.
* 함수는 대·소문자 관계없이 해당 단어를 걸러주어야 합니다.
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

*/

function checkSpam(str) {
    let change = str.toUpperCase();      // 1) 모든 문자를 대문자로 변환 (대/소문자 구분없이 파악하기 위해)

        if( change.includes("VIAGRA") || change.includes("XXX") ) return true;  // 문자열 중에 VIAGRA 또는 XXX가 있다면 true 반환
        return false;   // 둘 다 없을 시 false 반환
}
        
alert(checkSpam('buy ViAgRA now') == true);
alert(checkSpam('free xxxxx') == true);
alert(checkSpam("innocent rabbit") == false);

