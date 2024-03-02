var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ['Harry Houdini', 'David Copperfield', 'Penn & Teller'];
var great_magicians = [];
function make_great(magicians) {
    console.log("\n\tGreat Magician's Array\t\n");
    for (var i = 0; i < magicians.length; i++) {
        great_magicians[i] = "".concat(magicians[i], " the Great");
        console.log(great_magicians[i]);
    }
}
function show_magicians(magicians) {
    console.log("\n\tOriginal Array\t\n");
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
show_magicians(magicians);
make_great(__spreadArray([], magicians, true));
