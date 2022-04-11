const joi = require("joi")


const validator = (req, res, next) => {

    const schema = joi.object({

        firstName: joi.string().max(20).min(3).trim().pattern(new RegExp("[a-zA-z]")).required().messages({
            "string.min": "Name must contain more than 3 characters",
            "string.max": "The name must contain a maximum of 20 characters"
        }),
        lastName: joi.string().max(20).min(3).pattern(new RegExp("[a-zA-z]")).required().messages({
            "string.min": "Lastname must contain more than 3 characters",
            "string.max": "The lastname must contain a maximum of 20 characters"
        }),

        email: joi.string().email({ minDomainSegments: 2 }).required().messages({
            "string.email": "Wrong email format"
        }),
        password: joi.string().pattern(new RegExp("[a-zA-Z0-9]")).required().trim().min(8).max(30).messages({
            'string.min': 'The password must contain a minimum of 8 characters and contain uppercase, lowercase and number',
            'string.pattern': "The password must be alphanumeric and contain a number"
        }),
        // photoURL: joi.required().messages({
        //     "required.min": "missing image upload"
        // }),
        photoURL: joi.string().min(3).trim().pattern(new RegExp("[a-zA-z0-9]")).required().messages({
            "string.min": "The url must contain at least 5 characters"
        }),
        country: joi.string().max(20).min(3).trim().pattern(new RegExp("[a-zA-z]")).required().messages({
            "string.min": "Country must contain more than 3 characters",
            "string.max": "The country must contain a maximum of 20 characters"
        }),
        from: joi.string(),
        rol: joi.string()
    })
    const validador = schema.validate(req.body.objUser, { abortEarly: false })
    if (validador.error) {
        return res.json({ success: false, from: "validator", message: validador.error.details })
    }
    next()
}
module.exports = validator