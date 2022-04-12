import axios from "axios";



const usersActions = {
    signUp: (objUser) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.post(`http://localhost:4000/api/auth/signUp`, { objUser })
                console.log(res);
                dispatch({
                    type: "message",
                    payLoad: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })

            } catch (err) {
                console.log(err);
            }
        }
    },
    signIn: (objUser) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.post(`http://localhost:4000/api/auth/signIn`, { objUser })
                if (res.data.success) {
                    localStorage.setItem("token", res.data.response.token)
                    dispatch({ type: "user", payLoad: res.data })
                    dispatch({
                        type: "message", payLoad: {
                            view: true,
                            message: res.data.message,
                            success: res.data.success
                        }
                    })
                    dispatch({ type: "verified", payLoad: res.data.response.validate })
                } else {
                    dispatch({
                        type: "message",
                        payLoad: {
                            view: true,
                            message: res.data.message,
                            success: res.data.success
                        }
                    })
                }
            } catch (err) {
                console.log(err)
            }
        }
    },
    signOut: (userEmail) => {
        // console.log(userEmail)
        return async (dispatch, getState) => {
            try {
                const res = await axios.post(`http://localhost:4000/api/auth/signOut`, { userEmail })
                localStorage.removeItem("token")
                dispatch({
                    type: "userSignOut", payLoad: {
                        view: true,
                        message: res.data.message
                    }
                })


            } catch (err) {
                console.log(err)
            }

        }
    },
    verifyToken: (token) => {
        return async (dispatch, getState) => {
            try {

                const res = await axios.get(`http://localhost:4000/api/auth/signInToken`, {
                    headers: {
                        Authorization: "Bearer " + token   //dejar espacio en bearer antes del cierre de las comillas ( "Bearer ")
                    }
                })

                if (res.data.success) {
                    dispatch({ type: "user2", payLoad: res.data.response })
                    dispatch({
                        type: "message",
                        payLoad: {
                            token,
                            view: true,
                            message: res.data.message,
                            success: res.data.success
                        }
                    })
                } else {
                    localStorage.removeItem("token")
                }
            } catch (err) {
                console.log(err)
            }
        }
    },
    verifiedRol: (token) => {
        return async (dispatch, getState) => {
            try {

                const res = await axios.get(`http://localhost:4000/api/auth/signInRol`, {
                    headers: {
                        Authorization: "Bearer " + token   //dejar espacio en bearer antes del cierre de las comillas ( "Bearer ")
                    }
                })

                dispatch({ type: "verified", payLoad: res.data })

            } catch (err) {
                console.log(err)
            }
        }
    },
    getInfoUser: () => {
        const token = localStorage.getItem("token")
        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/user/info`, {
                headers: {
                    Authorization: "Bearer " + token   //dejar espacio en bearer antes del cierre de las comillas ( "Bearer ")
                }
            })
            return res.data.response
        }
    },
    modifiedUserData: (objData) => {
        const token = localStorage.getItem("token")
        // console.log(token);
        return async (dispatch, getState) => {
            const res = await axios.post(`http://localhost:4000/api/user/info`, { objData }, {
                headers: {
                    Authorization: "Bearer " + token   //dejar espacio en bearer antes del cierre de las comillas ( "Bearer ")
                }
            })
            if (res.data.success) {
                dispatch({ type: "user", payLoad: res.data })
                dispatch({
                    type: "message", payLoad: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
                dispatch({ type: "verified", payLoad: res.data.response.validate })
            } else {
                dispatch({
                    type: "message",
                    payLoad: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
            }
        }
    }

}




export default usersActions