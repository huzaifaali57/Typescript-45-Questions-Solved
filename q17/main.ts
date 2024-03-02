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

console.log("I can invite only two people for dinner\n")

while(guestList.length > 2){
 let guestRemoved = guestList.pop()
 console.log(`Sorry ${guestRemoved} I am sorry you I could not invite you to dinner.\n`)
}

guestList.forEach(guest => console.log(`Would you like to dine with me ${guest} ?`))

while(guestList.length = 0){
    guestList.pop()
}

console.log(`Empty List is`,guestList)