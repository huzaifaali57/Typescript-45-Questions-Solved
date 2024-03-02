var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Saudi Arabia", "Iran", "Canada", "Scotland", "Portugal"];
console.log("Original Order", places, "\n");
console.log("Alphabetical Order", __spreadArray([], places, true).sort(), "\n");
console.log("Still in Original Order", places, "\n");
console.log("Reversing List", __spreadArray([], places, true).reverse(), "\n");
console.log("Still in Original Order", places, "\n");
places.reverse();
console.log("Reversing Original List", places, "\n");
places.reverse();
console.log("Reversing back Original List", places, "\n");
console.log("Sorting Original List", places.sort(), "\n");
console.log("Reversing Sorted List", places.reverse(), "\n");
