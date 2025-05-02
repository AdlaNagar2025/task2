"use strict";
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