var users = ["admin", "manager", "eric", "martin", "robert"];
for (var i = 0; i <= users.length; i++) {
    if (users[i] == "admin") {
        console.log("Hello ".concat(users[i], " would you like to see a status report?"));
    }
    else if (users.includes(users[i])) {
        console.log("Hello ".concat(users[i], " thank you for logging in again."));
    }
}