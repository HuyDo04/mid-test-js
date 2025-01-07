function findSecondLargestNumber(arr) {
    if(!Array.isArray(arr) || arr.length === 0) {
        return `Invalid` 
    }
    let result = arr.sort((a,b) => a - b).slice(arr.length-2)[0]
    return result;
} 

const numbers = [];
const numbers2 = [5,4,1,2,3,8,7,6,4,10];

console.log(findSecondLargestNumber(numbers2))
console.log(findSecondLargestNumber(numbers))




