/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const map = {}
    for(const num of nums) {
        if(map[num]) return true
        map[num] = true
    }
    return false
};


/*

- Create a map to store the numbers we’ve seen so far.
- Loop through the array and check if the current number is in the map.
- If it is, we return true.
- If it isn’t, we add it to the map.
- Once we’ve looped through the array, we return false.


*/