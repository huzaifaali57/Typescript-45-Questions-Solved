let guestList = ["Bill","Mark","Jeff"]

guestList.forEach(guest => console.log(`Would you like to dine with me ${guest} ?`))

console.log(`\n${guestList[2]} will not be joining the dinner...So`)

guestList.splice(2,1,"Bernard")

console.log(`Instead ${guestList[2]} will join us!`)

console.log("I found a bigger dinner table.\n")

guestList.unshift("Elon")

let middleIndex : number = Math.floor(guestList.length / 2)

guestList.splice(middleIndex,0,"Batman")

guestList.push("Escobar")

guestList.forEach(guest => console.log(`Would you like to dine with me ${guest} ?`))

let guestcount : number = guestList.length;

console.log(guestcount)