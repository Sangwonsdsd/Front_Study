/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술연산자
 * 
 * 1)덧셈
 * 2)뺄셈
 * 3)곱셈
 * 4)나눗셈
 * 5)나머지
 */

console.log(10+10);
console.log(10-10);
console.log(10*10);
console.log(10/10);
console.log(10%10);

/**
 * 증감연산자
 * num++ : 해당 명령줄을 실행한 후에 값을 1올려라
 * +num : 먼저 값을 올리고 해당 명령줄을 실행해라
 */

let num =1;
num++;
console.log(num);
num--;
console.log(num);

num = 0;
console.log(++num);

/**
 * 숫자타입이 아닌 타입에 +,-를 사용하면 어떤 방식으로 처리될까?
 * 
 */

let tmp = '99';
console.log(+tmp);
console.log(typeof +tmp); //산술연산자는 숫자로 바꿔준다.

tmp = true;
console.log(+tmp);
console.log(typeof +tmp);

tmp = false;
console.log(+tmp);
console.log(typeof +tmp);

tmp = 'jiwon';
console.log(+tmp) // NaN -> Not a Number
console.log(typeof +tmp);

tmp = '99';
console.log(-tmp)
console.log(typeof -tmp);

/**
 * 대입연산자
 */

num = 100;

num += 100;
num -= 100;
num /= 100;
num %= 100;
num *= 100;

/**
 * 비교연산자
 * == : 자료형을 제외하고 값만 비교
 * === : 자료형을 포함한 값을 비교(형변환 없이 비교)
 */

console.log(5 == 5); //true
console.log(5 == '5') //true
console.log(5 === '5'); //false
console.log(0 == ''); //true

console.log(0 == false); //true
console.log(1 == false); //false
console.log('1' == true); //true

console.log(5 === 5); //true
console.log(5 === '5') //false
console.log(0 === ''); //false

console.log(0 === false); //false
console.log(1 === false); //false
console.log('1' === true); //false

console.log(5 != 5);
console.log(5 != '5');
console.log(0 != '');

console.log(5 !== 5);
console.log(5 !== '5');
console.log(0 !== '');

//비교연산자

console.log(10>1);
console.log(10>=1);
console.log(10<1);
console.log(10<=1);

/**
 * 상항연산자
 */

console.log(10>0 ? '10이 0보다 크다' : '0이 10보다 크다');

/**
 * 논리연산자
 * &&(AND) : 양쪽 조건이 모두 true 일 때 반환
 * ||(OR) : 양쪽 조건중 하나라도 true라면 true를 반환
 */



/**
 * 단축평가
 * 
 * &&를 사용했을 때 좌측이 true면 우측값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */

num = 50;
console.log(((num > 60) && "통과") || "불통");

console.log((false || true) && "가방");


/**
 * null 연산자
 */

let name = '후';
console.log(name);
name = name ?? '최지원';
console.log(name);

let name2;
let name3;
name2 = name3 ?? '최지원';
console.log(name2);


let name4;
name4 = null ?? '최지원';
console.log(name4);




