function checkUser (User, allUsers) {
    const response = {
        email: false,
        password: false,
        admin: false,
        User: {}
    }
    for(let i=0; i<allUsers.length; i++) {
        if(User.email == allUsers[i].dataValues.email) {
            console.log('Email exist')
            response.email = true
            if(User.password == allUsers[i].dataValues.password) {
                console.log('Successful Login')
                response.password = true
            }else {
                console.log('Incorrect password')
            }
            if (allUsers[i].admin == 1) {
                response.admin = true;
            }
            response.User = allUsers[i].dataValues
            return response;
        }
    }

    //console.log('User does not exist. Please sign up for an account')
    return response
}

module.exports = {checkUser}