function findOddNumber (arr){
    let result = []
    function helper(input){
        // if(input.length ===0) return 0;
        if(input[0] %2 !==0){
            result.push(input[0])

        }
        helper(input.slice(1))
    }
    helper(arr)
}
console.log(findOddNumber([2,3,6,7,5,9,11,13,55,75]))
