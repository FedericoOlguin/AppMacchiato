const Usuario = require("../models/user")
const bcryptjs = require("bcryptjs")
const crypto = require("crypto")
const nodemaider = require("nodemailer")
const jwt = require("jsonwebtoken")



const sendEmail = async (email, uniqueString) => { //Funcion que envia email de verificcacion

    const transporter = nodemaider.createTransport({ //creamos un objeto transporter utilizando el metodo de nodemailer
        host: "smtp.gmail.com",              //En el objeto cargamos los parametros necesarios
        port: 465,
        secure: true,
        auth: {
            user: "macchiatoweb10@gmail.com",                //DEFINIMOS LOS DATOS DE AUTORIZACION DE NUESTRO PROVEEDOR DE CORREO 
            pass: "macchiato123456"                                //Es necesario configurar el correo apra el uso de aplicaciones menos seguras
        },                                                     // y tambien no solocitar la verificacion en 2 pasos
        tls: {
            rejectUnauthorized: false
        }
    })


    // definimos los parametros del email
    let sender = "macchiatoweb10@gmail.com"
    let mailOptions = {
        from: sender,       //desde donde se enviara el email
        to: email,           //a quien se envia 
        subject: "User email verification", //es asunto el email
        html: `
        <table
        style="width: 80%;height: 50vh;padding: 10px;margin:0 auto;border-collapse: collapse;background-color: #A06235; border-radius: 8px;">
        <tr>
            <td style="background-color: #141313 ;text-align: left;padding: 0; width: 50%;border-radius: 8px; ">
                <h3 style="font-family: sans-serif;font-size: 2rem;color: white ;text-align: center;margin-bottom: 1rem;padding: 0 1rem;">Macchiato Coffee</h3>
                <div style="display: flex;">
                  <img   src="https://i.ibb.co/2Y5nRqH/logo.png" alt="logo" style="width: 200px; margin:auto">
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <h4 style="font-size: 1rem,font-family: sans-serif;color: #000 ;text-align: center;">Click <a style="color: #EFEEFE;"
                href=http://localhost:4000/api/verify/${uniqueString}> here </a> to verify your email</h4>

            </td>
        </tr>
    </table>
        `                                               //se establece el cuerpo de mensaje con el link del verificador
    }
    await transporter.sendMail(mailOptions, function (error, response) { //se realiza el envio del email por medio del metodo de "sendMail"
        if (error) {
            console.log(error)
        } else {
            console.log("Message sent")
        }
    })
}


const userController = {

    verifyEmail: async (req, res) => {
        const { uniqueString } = req.params  // extraemos de los parametros el string unico 
        const user = await Usuario.findOne({ uniqueString: uniqueString }) //buscamos al usuario por el codigo unico
        if (user) {
            user.verifiedEmail = true   //cambiamos el email a verificado pasando true como parametro
            await user.save()
            res.redirect("http://localhost:3000/signIn") //redirecciona al usuario a la ruta definida
            // res.json({success:true,response:"Your email has been successfully verified"})
        } else {
            res.json({ success: false, response: "Your email could not be verified" })
        }
    },

    signUpUser: async (req, res) => {
        const { from, firstName, lastName, email, password, photoURL, country } = req.body.objUser
        // console.log(from, firstName, lastName, email, password, photoURL, country);
        const name = {
            firstName: firstName,
            lastName: lastName,
        }
        try {

            // busco por email al usuario
            const userExiste = await Usuario.findOne({ email })
            // Se comprueba si el usuario existe o no
            if (userExiste) {
                // El usuario existe
                // Se comprueba el metodo por el cual esta registrado
                if (userExiste.from.indexOf(from) !== -1) {
                    // El metodo de registro ya existe, se retorna un mensaje avisando que solo tiene que realizar el signin
                    res.json({ success: false, from: "signup", message: "You have already registered in this way. please sign in" })
                } else {
                    // El metodo de registro no existe, y se procede a encriptar la contraseña y asignar lkos valores en las variables
                    const passwordHasheada = bcryptjs.hashSync(password, 10)
                    userExiste.from.push(from)
                    userExiste.password.push(passwordHasheada)

                    // Se comprueba  el metodo y la procedencia del registro (si desde el propio formulario o desde una cuenta de google,facebook,etc)
                    if (from === "signup") {
                        // Al registrarse  desde el formulario de la pagina se procede a enviar un email de confirmacion y se guarda al usuario en la base de datos
                        userExiste.uniqueString = crypto.randomBytes(15).toString("hex") // creamos y asignamos el string unico con el metodo randomBytes y pasamos el largo por parametro
                        await userExiste.save()
                        await sendEmail(email, userExiste.uniqueString) //llamamos  la funcion para enviar el email y pasamos por parametro el string unico y el email del usuario
                        res.json({
                            success: true,
                            from: "signup",
                            message: "We send you an email to validate it, check your mailbox to complete the registration"
                        })
                    } else {
                        // Al ser una cuenta ya existente de servicios externos solo se carga al usuario a la base de datros  
                        userExiste.save()
                        res.json({
                            success: true,
                            from: from,
                            message: "We added " + from + " to your means of registration."
                        })
                    }
                }
            } else {
                // El usuario no existe
                // Se encripta la contraseña, se crea un objeto usuario para cargar todos los datos
                const passwordHasheada = bcryptjs.hashSync(password, 10)
                const newUser = await new Usuario({
                    name: name,
                    email: email,
                    password: [passwordHasheada],
                    uniqueString: crypto.randomBytes(15).toString("hex"),
                    photoURL: photoURL,
                    country: country,
                    verifiedEmail: false,
                    rol: "user",
                    from: [from],
                })
                // Se comprueba el metodo y la procedencia del registro
                if (from !== "signup") {
                    // al ser de una cuenta de terceros solo se carga el usuario
                    await newUser.save()
                    res.json({
                        success: true,
                        from: from,
                        message: "Congratulations, your user has been created with " + from
                    })
                } else {
                    // El metodo es desde el formulario, se carga el usuario y se requiere comprobacion de email
                    await newUser.save()
                    await sendEmail(email, newUser.uniqueString) //llamamos a la funcion apra enviar el email
                    res.json({
                        success: true,
                        from: "signup",
                        message: "We send you an email to validate it, check your mailbox to complete the registration"
                    })
                }
            }
        } catch (err) {
            console.log(err);
            res.json({ success: false, message: "Something went wrong, Please try again later" })
        }
    },
    signInUser: async (req, res) => {
        const { email, password, from } = req.body.objUser

        try {
            // console.log(from);
            const userExiste = await Usuario.findOne({ email })
            // console.log(userExiste);
            // metodo para extraer la contraseña mediante el tipo de registro (from)
            // if (userExiste != null) {
            //     console.log(userExiste.from.indexOf(from));
            //     const indexPass = userExiste.from.indexOf(from)
            //     console.log(userExiste.password[indexPass]);
            // }


            if (!userExiste) {
                res.json({ success: false, message: "Your user has not been registered, sign up" })
            } else {

                if (from !== "signup") {
                    let passwordEquals = userExiste.password.filter(pass => bcryptjs.compareSync(password, pass))
                    if (passwordEquals.length > 0) {
                        const userData = {
                            id: userExiste._id,
                            name: userExiste.name,
                            email: userExiste.email,
                            photoURL: userExiste.photoURL,
                            from: from,
                        }
                        await userExiste.save()
                        const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 24 })
                        if (userExiste.rol === "admin") {
                            res.json({
                                success: true,
                                response: { token, userData, validate: true },
                                message: "Welcome back " + userData.name.firstName
                            })
                        } else {

                            res.json({
                                success: true,
                                response: { token, userData, validate: false },
                                message: "Welcome back " + userData.name.firstName
                            })
                        }
                    } else {
                        res.json({
                            success: false,
                            message: "You have not registered with " + from + ". If you want to enter with this method you must register with " + from
                        })
                    }
                } else {
                    if (userExiste.verifiedEmail) {
                        let passwordEquals = userExiste.password.filter(pass => bcryptjs.compareSync(password, pass))
                        if (passwordEquals.length > 0) {
                            const userData = {
                                id: userExiste._id,
                                name: userExiste.name,
                                email: userExiste.email,
                                photoURL: userExiste.photoURL,
                                from: from,
                            }
                            const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 24 })
                            if (userExiste.rol === "admin") {
                                res.json({
                                    success: true,
                                    response: { token, userData, validate: true },
                                    message: "Welcome back " + userData.name.firstName
                                })
                            } else {
                                res.json({
                                    success: true,
                                    response: { token, userData, validate: false },
                                    message: "Welcome back " + userData.name.firstName
                                })
                            }
                        } else {
                            res.json({
                                success: false,
                                message: "Username or password do not match"
                            })
                        }

                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: "You have not verified your email, please verify your email to complete your registration"
                        })
                    }
                }
            }
        } catch (err) {
            console.log(err)
        }
    },
    signOutUser: async (req, res) => {
        let emailUser = req.body.userEmail
        let user = await Usuario.findOne({ email: emailUser })
        // console.log(user);
        // await user.save()
        res.json({
            success: true,
            reponse: user.name,
            message: "Session  " + user.name.firstName + " closed"
        })
        // res.json(console.log("closed session " + user.email))

    },
    verificarToken: (req, res) => {
        // console.log("-----------req.user:--------------");
        // console.log(req.user)
        // console.log("----------Fin req.user:-----------");
        if (req.user) {
            res.json({
                success: true,
                response: { id: req.user.id, name: req.user.name, photoURL: req.user.photoURL, email: req.user.email, from: "token", rol: req.user.rol },
                message: "Welcome back " + req.user.name.firstName
            })

        } else {
            res.json({
                success: false,
                message: "Please login again"
            })
        }
    },
    authenticated: (req, res) => {
        // console.log("-----------req.user:--------------");
        // console.log(req.user)
        // console.log("----------Fin req.user:-----------");
        if (req.user.rol.includes("admin")) {
            res.json(true)

        } else {
            res.json(false)
        }
    },
    infoUser: async (req, res) => {
        const id = req.user.id

        // console.log(id);

        try {
            let userRes
            const devolver = await Usuario.findOne({ _id: id })
            // console.log(devolver);
            userRes = {
                name: devolver.name,
                photoURL: devolver.photoURL,
                country: devolver.country,
                email: devolver.email
            }
            // console.log(userRes);
            res.json({ response: userRes })

        } catch (err) {
            console.log(err);
        }
    }

}

module.exports = userController