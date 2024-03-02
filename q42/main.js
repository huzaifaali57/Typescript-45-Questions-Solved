var magicians = ['Harry Houdini', 'David Copperfield', 'Penn & Teller'];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "".concat(magicians[i], " the Great");
    }
}
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
make_great(magicians);
show_magicians(magicians);
