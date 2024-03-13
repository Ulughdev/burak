// Task - L

function reverseSentence(sentence: string): string {
let pablo = sentence.split(" ");
let a = [];
for (let ele of pablo){
  a.push(ele.split("").reverse().join(""));
}
//console.log("Pablo: ", pablo[0]);
return a.join(" ");
}

console.log(reverseSentence("we like coding"));







/* PROJECT STANDARDS
 - logging standards   --controller 
 - Naming Standards    -- Camael case- function, method, variable   gohome
 -- class => Pascal   menberservice
 --folder => kebab
 -- css => Snake      button_style

 - Error handling

*/

/*
  Traditional Api
  Rest  Api
  GraphQL Api
  ....
*/


