let userName = prompt('이름 입력. 틀리면 뒤짐','');
let password;


/*
이정훈을 입력했다면 다음 조건문 실행 > 마동주는 존잘입니까?

*/
if (userName == "이정훈") {
    password=prompt('마동주는 존잘입니까?','')
    
    if(password=='ㅇㅇ') {
        alert('보는 눈이 있네');
    } else if (password='') {
        alert('엔터 쓰지마라. 다시 입력해');
    } else if (password=null) {
        alert('종료하지마라. 다시 입력해');
    } else {
        alert('눈없냐? 다시 입력해.');
    }

} else if(userName=='') {
    alert('엔터 쓰지마라. 다시 입력해');
} else if(userName=null) {
    alert('종료하지마라. 다시 입력해');
} else {
    alert('이름 틀렷잖아 빡대가리야?');
}