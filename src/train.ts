// Task - M

const getSquareNumbers = (numbers: any[]): object => {

  let a: any[] = [];
  numbers.map(function(ele){
    let b = ele * ele;
    let c = {number: ele, square: b};
    a.push(c);
    //console.log(c)
  })
return a;
}

console.log(getSquareNumbers([1, 2, 3]));







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


