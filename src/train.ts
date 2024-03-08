//  Task -J
function findLongestWord(word: string): string {
   let pablo = word.split(' ');
   let max = pablo[0];
   for(let ele of pablo){
    if(max.length < ele.length){
      max= ele;
    }
   }
   
   return max;
};

console.log(findLongestWord("I come from Uzbekistan"));

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


