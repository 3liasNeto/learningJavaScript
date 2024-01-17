// * Find the Min and Max value in an array *
function miniMaxValue(arr) {
    const min = Math.min(... arr);
    const max = Math.max(... arr);
    return [min, max]
}

console.log(miniMaxValue([1,2,3,4,5]))