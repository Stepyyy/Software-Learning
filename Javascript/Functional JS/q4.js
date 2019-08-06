function getShortMessages(messages) {
    /*messages.forEach(message => {
        console.log(message.message.length)
    })
    */
    return messages.filter(item => item.message.length < 50).map(item => item.message);
}



module.exports = getShortMessages