let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn & Teller'];

let great_magicians: string[] = [];

function make_great(magicians : string[]){
    console.log("\n\tGreat Magician's Array\t\n")
    for (let i = 0; i < magicians.length; i++) {
        great_magicians[i] = `${magicians[i]} the Great`
        console.log(great_magicians[i])
    }
}

function show_magicians(magicians: string[]) {
    console.log("\n\tOriginal Array\t\n")
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

show_magicians(magicians);
make_great([...magicians])