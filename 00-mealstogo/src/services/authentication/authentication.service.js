import * as firebase from 'firebase'
import 'firebase/auth'

const loginRequest = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
}
