// Task - Q
function hasProperty(value1: object, value2: string): boolean {
  let a = false;
  for(let ele in value1 ) {
    if(ele === value2) {
      a = true ;
  }
}
return a;

}
console.log(hasProperty({name: "BMW", model: "M3"}, "model"));


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


