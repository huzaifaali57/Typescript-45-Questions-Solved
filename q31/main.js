var users = ["user1", "user2", "user3"];
if (users.length > 0) {
    console.log("User Count ".concat(users.length));
}
else {
    console.log('No users found.');
}
// Remove all of the usernames from your array
users.splice(0, users.length);
console.log(users); // Output: []
