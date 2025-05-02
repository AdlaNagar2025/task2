"use strict";



// True Or False
// task 1:
// if("0")
// {
//   alert("hello");
// }
// כן תהיה alert כי Boolean ("0")==>true
// task 2:
// let result=prompt("what is the ofiical name of JavaScripr ?")
// if(result==="ECMAScript")
//   alert("Correct");
// else
//   alert("Wrong");
// task 3:
// let score=75;
// let grade;
// grade= score>=90 ? "A" :  score>=80 ?  "B" : score >=70 ? "C" : score >=60 ? "D"  : "E" ;
// console.log(" The grade :" + grade);
// task 4:
// let num=prompt("Enter a number:");
// while(isNaN(num))
//       num=prompt("Enter a number:");
// if(num>0)
//    alert(1);
// else if(num<0)
// alert(-1);
// else
// alert(0);
// task 5:
// let a=prompt("Enter a number1 ");
// while(isNaN(a))
//      a=prompt("Enter a number1:");
// let b=prompt("Enter a number2 ");
// while(isNaN(b))
//     b=prompt("Enter a number1:");
// let result;
// result=(a+b<4)? "Not enough" : "A lot"
// alert(result);
// task 6:
// let message;
// let login=prompt("write Employee , Director , No login ....");
// message= (login == 'Employee') ? 'Hello' : (login == 'Director') ?  'Hello' : (login == ' ' )? 'No login' : ' ';
// alert(message);
// // task 7:
// console.log(false || 'sdf');
// // ==>sdf because'sdf'=true
// console.log(false && ' ')
// // ==> false because false && לא משנה ==false
// console.log(true || ' ')
// // ==> true because ftrue ||לא משנה ==true
// console.log(true && ' ')
// // ==> ' '
// console.log(undefined || null)
// // ==>null
// console.log(undefined || 0 || null)
// // ==>null
// console.log(undefined && 0 && null)
// // ==>undefined
// console.log(1 || 0)
// // ==>1
// console.log(null || 1)
// // ==>1
// console.log(null || 0 || 1)
// // ==>1


// Loops
// task 1:
// let sum=0;
// let i=0;
// while(i<=100)
// {sum+=i;
// i++;}
// console.log("the sum of numbers 1-100 = " + sum);
// task 2:
// let num;
// do {
//   num=prompt("Enter a number");
// }
// while(isNaN(num) || Number(num)<=0)
// console.log(num);
// task 3:
// const num=7;
// for(let i=1;i<=10;i++)
// {
//  console.log(`${num} x ${i} = ${num*i}`);
//  }
// task 4:
// const secret=7;
// let num=Number(prompt("Enter a number"));
// while(true)
// {
// if(num===secret)
// {
//   alert("correct");
//   break;
// }
// else
// num=Number(prompt("Please try again"));
// }
// task 5:
// for (let i = 0; i < 30; i++) {

//    if (i % 3 == 0) continue;

//    alert(i);
// }
// task 6:
// let i = 3;

// while (i) {
//   alert( i-- );
// }
// 1 הוא הערך האחרון כי 0 ==FALSE
// task 7:
// let i=0;
// while(++i< 5)
// console.log(i);
// 1
// 2
// 3
// 4
// let i=0;
// while(i++< 5)
// console.log(i);
// 1
// 2
// 3
// 4
// 5
// ++ מצד שמאול אומר שמעלים את הערך אחר כך משתמשים  ו ההפך לצד ימין
// task 8:
// for(let i=0;i<5;i++) console.log(i);
// 0
// 1
// 2
// 3
// 4
// for(let i=0;i<5;++i) console.log(i);
// 0
// 1
// 2
// 3
// 4
// 2 לולאות זהות כי ה I לא משפיע על הפלט
// task 9:
// for(let i=2;i<=10;i+=2)
// console.log(i);
// task 10:
// for(let i=0;i<3;i++)
// alert(`number ${i}!`)
// let i=0
// while(i<3)
// alert(`number ${i++}!`)



// String methods
//   task1:
// let name = 'Mary '
// let activity = 'drink tea'
// let bio = 'Our guest ' + name + activity + '.'
// console.log(bio.length);
// task2:
// let number=prompt('enter a number');
// const str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';
// console.log(str.charAt(number));
// task3:
// let str=prompt('enter a string');
// console.log(`last char is ${str.charAt(str.length-1)}`);
// console.log(str.charAt(str.length-2));
// task4:
// let str='abcde';
// let new_str='';
// for(let i=str.length-1;i>=0;i--)
// new_str += str.charAt(i);
// console.log(str);
// console.log(`the new str ${new_str}`);
// task5:
// let name='js'
// console.log(`${name} in the capital letter ${name.toUpperCase()}`);
// task6:
// const str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
// let string=prompt("enter a string")
// console.log(str.includes(string));
// task7:
// const point = '-';
// let str = '1-2-3-4-5';
// console.log(str);
// while (str.includes(point)) {
// 	str = str.replace(point, '.');
// }
// console.log(str);
// task8:
// let str = '1-2-3-4-5';
// console.log(str);
// console.log(str.replaceAll("-","."));
// task9:
// let str="sdfwe"
// console.log(str.substring(4, 2));
// == console.log(str.substring(2, 4)) fw
// task10:
// const str = "I'm learning javascript!";
// console.log(str);
// learning javascript
// console.log(str.substr(3,20));
// console.log(str.substring(3,str.length-1));
// console.log(str.slice(3,str.length-1));
// learning
// console.log(str.substr(3,9));
// console.log(str.substring(3, 12));
// console.log(str.slice(3, 12));
//  javascript
// console.log(str.substr(12, 11));
// console.log(str.substring(12, str.length-1));
// console.log(str.slice(12, str.length-1));
// task11:
// const strsearch='http://'
// const str = 'http://www.notion.so/String-820cf1e906884d8fb9c02236fe1c6dcb/'
// if(str.indexOf(strsearch)===0)
// console.log("yes")
// else
// console.log("no")
// task12:
// const strsearch='.html'
// const str = 'https://www.notion.html'
// if(str.length===str.indexOf(strsearch)+strsearch.length)
// console.log("yes")
// else
// console.log("no")
// task13:
// const str='ab cd cd cd ef';
// console.log(str.lastIndexOf('cd')); //9
// console.log(str.lastIndexOf('cd',8));//6
// task14:
// const str='abcde';
// console.log(str.startsWith('abc')); //true
// console.log(str.startsWith('xxx')); //false
// console.log(str.startsWith('bc',1)); //true
// task15:
// const str='abcde';
// console.log(str.endsWith('cde')); //true
// console.log(str.endsWith('xxx')); //false
// console.log(str.endsWith('bc',3)); //true
// task16:
// let str='ab-cd-ef';
// console.log(str);
// console.log(str.split('-'));  //["ab","cd","ef"]
// console.log(str.split('-',2));  //["ab","cd"]
// console.log('');
// console.log('',3);  //3
// let str2='12345';
// console.log(str2.split(''));    //["1","2","3","4","5"]