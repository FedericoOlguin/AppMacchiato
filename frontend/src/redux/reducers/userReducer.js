const initialState = {
    user: null,
    snackbar: {
        view: false,
        message: "",
        success: false
    },
    authorized: false
}


const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case "user":
            return {
                ...state,
                user: action.payLoad.response.userData,
                // snackbar: {
                //     view: action.payLoad.response.userData.view,
                //     message: action.payLoad.message,
                //     success: action.payLoad.success
                // }
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
                snackbar: action.payLoad,
                authorized: false
            }
        case "verified":
            return {
                ...state,
                authorized: action.payLoad
            }
        default:
            return state
    }
}

export default userReducer