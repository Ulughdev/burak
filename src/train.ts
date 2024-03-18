// Task - N

const palindromCheck = (value: string): boolean => {
  let a = value.split("").reverse().join("");
  if(a === value){
    return true;
  }
  return false;

}

console.log(palindromCheck("dad"));





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


