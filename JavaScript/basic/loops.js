/**
 * Loops
 * 
 * 1)for
 * 2)while
 */

for(let i = 1; i <= 10; i++){
    console.log(i);
}


let sum = 0;
for(let i =5; i <= 15; i++){
    sum+=i;
}
console.log(sum);

for(let i=1; i<10;i++){
    console.log( i + "단");
    for(let j = 1; j<10 ; j++){
        console.log(i + "x" + j +"=" + i*j);
    }
    console.log();
}

/**
 * for ..in
 */

const human = {
    name : '상원',
    age : 55,
    gender : '남자'
}

for(let key in human){
    console.log(human[key])
    console.log(key + ":" + human[key])
}

/**
 * for ..of
 */

human = ['jiwon','sumon','so'];

for(let value of human){
    console.log(value)
}

/**
 * while
 */

let number = 0;
while(number < 11){
    console.log(number++);
}


/**
 * do..while
 */

number = 0;
do{
    console.log(number++);
}while(number < 11);


/**
 * break
 * continue
 */

number = 0;
while(true){ 
    // if(number % 2 === 1){
    //     number++;
    //     continue;
    // }
    console.log(number);
    number++;
    if(number > 10){
        break;
    }
}