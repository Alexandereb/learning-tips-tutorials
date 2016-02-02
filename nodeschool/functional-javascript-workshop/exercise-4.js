function getShortMessages(messages) {
    var array = messages.filter(function(element){
      if (element.message.length < 50)
        return true
      else
        return false
    });
    var final_array = array.map(function(item){
      return item.message
    });
    console.log(final_array)
    return final_array
}

module.exports = getShortMessages


// module.exports = function getShortMessages(messages) {
//   return messages.filter(function(item) {
//     return item.message.length < 50
//   }).map(function(item) {
//     return item.message
//   })
// }
