let guestList = ["Bill","Mark","Jeff"]

guestList.forEach(guest => console.log(`Would you like to dine with me ${guest} ?`))

console.log(`\n${guestList[2]} will not be joining the dinner...So`)
guestList.splice(2,1,"Bernard")
console.log(`Instead ${guestList[2]} will join us!`)
console.log(`So ${guestList} will join the dinner.`)