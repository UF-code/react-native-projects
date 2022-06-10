import * as firebase from 'firebase'
// import 'firebase/auth'

export const loginRequest = (email, password) => {
    // console.log(email, password, 'hey')
    firebase.auth().signInWithEmailAndPassword('email@email.com', 'password')
}
