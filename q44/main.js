function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    console.log("Items: " + items.join(', '));
}
// Calling function with different numbers of arguments
make_sandwich('Turkey', 'Cheese', 'Lettuce');
make_sandwich('Ham', 'Tomato');
make_sandwich('Peanut Butter', 'Jelly', 'Banana', 'Honey');
