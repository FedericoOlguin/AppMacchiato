const initialState = {
    user: null,
    snackbar: {
        view: false,
        message: "",
        success: false
    }
}


const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case "user":
            return {
                ...state,
                user: action.payLoad.response.userData,
                snackbar: {
                    view: action.payLoad.response.userData.view,
                    message: action.payLoad.message,
                    success: action.payLoad.success
                }
            }
        case "user2":
            return {
                ...state,
                user: action.payLoad
            }

        case "message":
            return {
                ...state,
                snackbar: action.payLoad
            }
        case "userSignOut":
            return {
                user: action.payLoad,
                snackbar: {
                    view: false,
                    message: "",
                    success: false
                }
            }
        default:
            return state
    }
}

export default userReducer