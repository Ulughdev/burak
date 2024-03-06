function getDigits(mix: string): Number{
    let a:number = parseFloat(mix.replace(/[^\d\.]*/g, ''));;
     return a;
};

console.log("javob: ", getDigits("m21nh2jhh667"));

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


