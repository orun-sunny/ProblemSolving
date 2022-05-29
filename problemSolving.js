let temperature = [ -2,4,45,23,"error",-4,-6,-8,34,43]
function getHighestAndLower (arr){
    //create a higheer variable
    let higher = arr[0]
    let lower = arr[0]

    for (let i=0; i <arr.length;i++){
        if (typeof arr[i] !== "number")
        continue;
        if (higher< arr[i]){
            higher = arr[i]
        }
        if (lower > arr [i]){
            lower = arr [i]
        }
    }
    console.log (lower,higher)
    



    //lower variable
}

getHighestAndLower (temperature)
