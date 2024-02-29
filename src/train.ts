
function getPositive(numbers: number[]): string{ 
    let a = ("");
    for(let number of numbers){
        if(number > 0){
            a = a + number;

        }
    }
    let b = a.toString();
    return b.split("").join("")

}

console.log(getPositive([1, -4, 2]));


