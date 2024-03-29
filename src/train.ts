// Task - S
function missingNumber(numbers: number[]): number {
const points = numbers;
let a = points.sort(function(a, b){return a-b});
for(let i =0; i < a.length; i++){
  if(a[i+1] - 1 !== a[i]){
    return a[i] + 1;
  }

  }
console.log(a);
  return 1;
}
console.log(missingNumber([3,0,1]));


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


