let n = prompt('값을 입력하세요','');
showPrimes(n);

function showPrimes(n) {
  for(let i=2; i<=n; i++) {

    if(isPrime(i))  alert(i);
 }

}
 
 function isPrime(n) {
 
   for(let i=2; i<n; i++) {

    if(n % i == 0) return false;

   }
   return true;
 }
