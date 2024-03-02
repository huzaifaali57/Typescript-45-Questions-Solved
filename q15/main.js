var guestList = ["Bill", "Mark", "Jeff"];
guestList.forEach(function (guest) { return console.log("Would you like to dine with me ".concat(guest, " ?")); });
console.log("\n".concat(guestList[2], " will not be joining the dinner...So"));
guestList.splice(2, 1, "Bernard");
console.log("Instead ".concat(guestList[2], " will join us!"));
console.log("So ".concat(guestList, " will join the dinner."));
