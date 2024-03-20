// Task - O
function calculateSumOfNumbers(input: any): number {
  let a = 0;
  input.map((ele: any) => {
    if(typeof ele === "number") {
      a += ele; 
    }
    //console.log(ele);
  })
  return a;
}

console.log(calculateSumOfNumbers([10,"10", {son:10}, true, 35,]));




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


