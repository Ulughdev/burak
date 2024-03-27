// Task - Q
function calculate(values: string): number {
  let a = 0;
  let b = values.split('');
  for (let ele of b) {
    let c = parseInt(ele);
    if (c >= 0 || c <= 0) {
      a+=c;
    }
    
  }

  return a;
}

console.log(calculate("1+3"));


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


