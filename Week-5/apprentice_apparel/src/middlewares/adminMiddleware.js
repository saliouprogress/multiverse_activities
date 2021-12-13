const { db }  = require('../../server/model')
//const {allUsers} = require('../../server/model/User')

function isAdmin(User) {
    if(User.admin == 1) {
        return true
    }else {
        return false
    }
}
module.exports = {isAdmin}