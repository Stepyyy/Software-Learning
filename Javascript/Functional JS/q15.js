function loadUsers(userIds, load, done) { //don't fully understand purpose of 'done'
    var users = []
    userIds.forEach((element, index) => {
        users[index] = load(element, user => {
            user
        })
    });
    return users
}

module.exports = loadUsers