var guestList = ["Bill", "Mark", "Jeff"];
guestList.forEach(function (guest) { return console.log("Would you like to dine with me ".concat(guest, " ?")); });
console.log("\n".concat(guestList[2], " will not be joining the dinner...So"));
guestList.splice(2, 1, "Bernard");
console.log("Instead ".concat(guestList[2], " will join us!"));
console.log("I found a bigger dinner table.\n");
guestList.unshift("Elon");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Batman");
guestList.push("Escobar");
guestList.forEach(function (guest) { return console.log("Would you like to dine with me ".concat(guest, " ?")); });
console.log("I can invite only two people for dinner\n");
while (guestList.length > 2) {
    var guestRemoved = guestList.pop();
    console.log("Sorry ".concat(guestRemoved, " I am sorry you I could not invite you to dinner.\n"));
}
guestList.forEach(function (guest) { return console.log("Would you like to dine with me ".concat(guest, " ?")); });
while (guestList.length = 0) {
    guestList.pop();
}
console.log("Empty List is", guestList);
