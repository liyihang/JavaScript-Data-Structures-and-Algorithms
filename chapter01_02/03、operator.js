var num = 0; 
num = num + 2;
num = num * 3;
num = num / 2;
num++;
console.log(num);
num--;
console.log(num);
num += 1; 
num -= 2;
num *= 3;
num /= 2;
num %= 3;
// assignment operators
console.log(num);
console.log('num == 1 : ' + (num == 1)); 
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));
// logical operators
console.log('true && false : ' + (true && false)); 
console.log('true || false : ' + (true || false));
console.log('!true : ' + (!true)); 
// bitwise operators
console.log('5 & 1:', (5 & 1));
console.log('5 | 1:', (5 | 1));
console.log('~ 5:', (~5));
console.log('5 ^ 1:', (5 ^ 1));
console.log('5 << 1:', (5 << 1));
console.log('5 >> 1:', (5 >> 1)); 
// typeof operator
console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1,2,3]);
console.log('typeof {name:John}:', typeof {name:'John'}); 

// delete operator
var myObj = {name: 'John', age: 21};
delete myObj.age;
console.log(myObj); // 输出对象{name: "John"} 

