



const verifedRol = async (req, res, next) => {

    try {


        if (req.user.rol === "Admin365") {
            next()
            console.log(req.user.rol);
        } else {
            console.log("no se puede acceder/Falta de autorizacion apra el citio");
            res.json({ response: "no se puede acceder/Falta de autorizacion apra el citio" })
        }
    } catch (err) {
        console.log(err);
    }
}


module.exports = verifedRol