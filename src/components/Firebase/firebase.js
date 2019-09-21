import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC_OUrmQdScBtML3xsjP6XhDNcI-VG2688',
  authDomain: 'bird-checker.firebaseapp.com',
  databaseURL: 'https://bird-checker.firebaseio.com',
  projectId: 'bird-checker',
  storageBucket: '',
  messagingSenderId: '819379707704',
  appId: '1:819379707704:web:e9ba5e0f7b0f72e5362bcd'
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  // Auth API
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  // SignIn API
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  // SignOut API
  doSignOut = () => this.auth.signOut();

  // Password Reset API
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  // Password Update API
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}
export default Firebase;
