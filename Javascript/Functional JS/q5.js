function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        const containsEvery = function (item) {
            const containsSome = function (gooditem) {
                return gooditem.id === item.id
            }
            return goodUsers.some(containsSome)
        }

        return submittedUsers.every(containsEvery)
    };
}


module.exports = checkUsersValid