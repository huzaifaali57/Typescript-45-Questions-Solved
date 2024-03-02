var pname = "Huzaifa Ali";
console.log(pname.toLowerCase());
console.log(pname.toUpperCase());
console.log(pname.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
