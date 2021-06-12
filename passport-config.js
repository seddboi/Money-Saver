const localStrat = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserEmail, getUserID) {
    const authenticateUser = async (email, password, done) => {
        const user = getUserEmail(email)
        if (user == null) {
            return done(null, false, { message: 'No user found please create an account using the sign up link below:' })
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
        } else {
            return done(null, false, { message: 'Password incorrect' })
        }
    } catch(e) {
        return done(e)
    }
}

passport.use(new localStrat({ usernameField: 'email' },
authenticateUser))
passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((id, done) => {
    return done(null, getUserID(id))
})

}

module.exports = initialize