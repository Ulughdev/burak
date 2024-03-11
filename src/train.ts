// Task - K 

function countVowels(input: string): number{
  const b = ["a", "e", "i", "o", "u"];
  let a: number = 0;
  for(let letter of input.toLowerCase()){
    if(b.includes(letter)){
      a ++;
    }
  }
   


  return a;
}

console.log(countVowels("string"));







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


