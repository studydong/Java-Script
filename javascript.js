let user = {
  
  name: "John",
  sizes: {
   height: 182,
   width: 50
  }
   
 };
 
 let clone = _.cloneDeep(user);
 
 alert( user.sizes === clone.sizes );	// true, 같은 객체입니다
 // 즉, user객체와 clone객체는 sizes객체를 공유합니다.
 
 user.sizes.width++;			// user.sizes에 프로퍼티 width 값을 변경합니다. (후위증가)
 alert(clone.sizes.width);	// 51, 객체를 공유하기 때문에 clone에서 변경사항을 확인할 수 있습니다.