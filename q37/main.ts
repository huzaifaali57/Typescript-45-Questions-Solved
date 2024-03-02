function make_shirt(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`The T-shirt size is ${size} and the message printed on it is: "${message}".`);
}

// Calling the function with size "Large" and message "Hello, World!"
make_shirt();

make_shirt("Medium");

make_shirt("Small","Hello, World!")