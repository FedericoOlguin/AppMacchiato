const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt

const Usuario = require('../models/users')

module.exports = passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
}, (jwt_payload, done) => {
    // console.log("---------Payload--------")
    // console.log(jwt_payload)
    // console.log("---------Fin Payload--------")
    
    Usuario.findOne({ _id: jwt_payload.id })

        .then(user => {
            // console.log(user)
            if (user) {
                return done(null, user)
            }
            else {
                return done(null, false);
            }
            // else{
            //     return done(null, false)
            // }
        })
        .catch(err => {
            console.log(err)
            return done(err, false)
        })

}))