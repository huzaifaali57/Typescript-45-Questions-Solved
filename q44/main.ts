function make_sandwich(...items: string[]) {
    console.log("Sandwich Summary:");
    console.log("Items: " + items.join(', '));
}

// Calling function with different numbers of arguments
make_sandwich('Turkey', 'Cheese', 'Lettuce');
make_sandwich('Ham', 'Tomato');
make_sandwich('Peanut Butter', 'Jelly', 'Banana', 'Honey');