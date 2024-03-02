function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The T-shirt size is ".concat(size, " and the message printed on it is: \"").concat(message, "\"."));
}
// Calling the function with size "Large" and message "Hello, World!"
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Hello, World!");
