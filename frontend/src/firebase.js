import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCDd_zitdJCTR2cT7fASxeCtC10fgOyqMg",
    authDomain: "chai-paani.firebaseapp.com",
    projectId: "chai-paani",
    storageBucket: "chai-paani.appspot.com",
    messagingSenderId: "802231351673",
    appId: "1:802231351673:web:0f9635f65d3bdbb2a997a8",
    measurementId: "G-7P09TS717K"
  };

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);