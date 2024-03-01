
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


