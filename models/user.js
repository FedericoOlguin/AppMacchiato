const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        firstName: {
            type: String, required: true,
        },
        lastName: {
            type: String, required: true
        }
    },
    email: { type: String, required: true },
    password: [{ type: String, required: true }],
    verifiedEmail: { type: Boolean, required: true, default: false },
    country: { type: String, required: true },
    photoURL: { type: String, required: true },
    rol: { type: String, required: true },
    from: { type: Array, required: true },
    uniqueString: { type: String, required: true },
    accessService: [{
        serviceID: { type: mongoose.Schema.Types.ObjectId, ref: 'products' },

    }]
})

const User = mongoose.model('users', userSchema)
module.exports = User