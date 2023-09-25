/**
 * 타입변환
 * Type Conversion
 * 
 * 1)명시적
 * 2)묵시적
 * 
*/

let age = 45;

//명시적
let strAge = age.toString(); //String으로 변환
console.log(typeof strAge);

//묵시적
let tmp = age + "";
console.log(typeof strAge);

console.log(2 - "98");

/**
 * 명시적 형변환 예시
 * 
 */

console.log((99).toString());
console.log((true).toString());
console.log((infinity).toString());

//숫자타입
console.log(parseInt('0'));
console.log(parseFloat('1.32'));
console.log(+'0');

//boolean
console.log(!!'jiwon');

console.log({name : '지원'} == {name : "지원"});
