import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import firebase_key from '../keys/FirebaseKey'


export default class Firebase {

    constructor(){
        this.app = initializeApp(firebase_key);
        this.user = null
    }

    getFirestoreDb(){
        return getFirestore(this.app)
    }

    getAuthentication(){
        return getAuth(this.app)
    }

    setUser(user){
        this.user = user
    }

    getUser(){
        return this.user
    }

}