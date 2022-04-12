


const authUsers = {

    verifedRol: async (req, res, next) => {

        try {

            if (req.user.rol === "admin") {
                next()                
            } else {            
                res.json({ response: "no se puede acceder/Falta de autorizacion para el citio" })
            }
        } catch (err) {
            console.log(err);
        }
    },
    

}

module.exports = authUsers