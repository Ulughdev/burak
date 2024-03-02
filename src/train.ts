
function getPositive(numbers: number[]): string{ 
    let a = ("");
    for(let number of numbers){
        if(number > 0){
            a = a + number;

        }
    }
    return a.split("").join("")

}

console.log(getPositive([1, -4, 2]));


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


