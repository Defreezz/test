function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) if (haystack.includes("3") === true) {
        console.log("found the needle at position " + haystack[i]);
        return "found the needle at position " + i;
    } else console.log("not found the needle at position " + i)

}
findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]);