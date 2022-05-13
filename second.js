var baseSKU = 'kf1097';
var variationOptions = [

    {
        name: 'size',
        options: [40, 41, 42, 43]
    },
    {
        name: 'color',
        options: ['black', 'brown', 'chocolate']
    }
];

var productCodes = prepareCodes();
function prepareCodes() {
    let arr = []
    for (let i = 0; i < variationOptions[1].options.length; i++) {
        
        for (let j = 0; j < variationOptions[0].options.length; j++){
            let str = "baseSKU"+"-"+ variationOptions[1].options[i]+ "-" + variationOptions[0].options[j] 
            arr.push(str);

            
        }

    }
    return(arr);
}

//['kf1097-black-40']


