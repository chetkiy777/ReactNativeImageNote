import db from '../../firebase/config'

export const authSignInUser = () => async (dispatch, getState) => {

}

export const authSignUpUser = ({email, password, nickname}) => async (dispatch, getState) => {
    try {
        const user = await db.auth().createUserWithEmailAndPassword(email, password)
        console.log(user)
    } catch (error) {
        console.log(error)
        console.log(error.message)
    }
}

export const authSignOutUser = () => async (dispatch, getState) => {

}