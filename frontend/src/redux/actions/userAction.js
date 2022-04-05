import axios from "axios";


const usersActions = {
    signUp: (objUser) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.post(`https://mytinerarry-olguin.herokuapp.com/api/auth/signUp`, { objUser })

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
                const res = await axios.post(`https://mytinerarry-olguin.herokuapp.com/api/auth/signIn`, { objUser })
                if (res.data.success) {
                    localStorage.setItem("token", res.data.response.token)
                    dispatch({ type: "user", payLoad: res.data })
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
                const res = await axios.post(`https://mytinerarry-olguin.herokuapp.com/api/auth/signOut`, { userEmail })
                localStorage.removeItem("token")
                dispatch({ type: "userSignOut", payLoad: null })

            } catch (err) {
                console.log(err)
            }

        }
    },
    verifyToken: (token) => {
        return async (dispatch, getState) => {
            try {
                
                const res = await axios.get(`https://mytinerarry-olguin.herokuapp.com/api/auth/signInToken`, {
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
    }
}

export default usersActions