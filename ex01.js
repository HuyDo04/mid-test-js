function printChristmasTree(n, character) {
    if( n <= 0 || !Number.isInteger(n)  || typeof character !=="string") {
        return `Invalid`
    }
    return character
}

console.log(printChristmasTree(3,"s"))


