let places = ["Saudi Arabia","Iran","Canada","Scotland","Portugal"]

console.log("Original Order",places,"\n")

console.log("Alphabetical Order",[...places].sort(),"\n")

console.log("Still in Original Order",places,"\n")

console.log("Reversing List",[...places].reverse(),"\n")

console.log("Still in Original Order",places,"\n")

places.reverse()
console.log("Reversing Original List",places,"\n")

places.reverse()
console.log("Reversing back Original List",places,"\n")

console.log("Sorting Original List",places.sort(),"\n")

console.log("Reversing Sorted List",places.reverse(),"\n")