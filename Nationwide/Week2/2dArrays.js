const arr = [ [10, 20, 30],
            [40, 50, 60],
            [70, -80, 90] ];


            
const greatestSum = (outterArray) => {
    outterArray.forEach( innerArrays =>{
        console.log(Math.max(...innerArrays))
    })
};


console.log(greatestSum(arr))