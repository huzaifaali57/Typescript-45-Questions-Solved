var current_users = ["user1", "user2", "user3", "user4", "user5"];
var new_users = ["user6", "user7", "USER1", "user8", "user2"];
for (var i = 0; i < new_users.length; i++) {
    var usernames = new_users[i];
    if (current_users.includes(usernames.toLowerCase())) {
        console.log("".concat(usernames, " is already in use. Please enter new username"));
    }
    else {
        console.log("".concat(usernames, " is available!"));
    }
}
