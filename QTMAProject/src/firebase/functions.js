import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";

export function login({ email, password }) {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then((userInfo) => {
      console.log(userInfo)
      if(!userInfo.user.emailVerified){
        auth().signOut(); // the effect of the above sign in method (that is needed to access the userInfo packet) needs to be reversed to prevent errors
        Alert.alert("Account not yet verified", "In order to proceed, the email associated with this account needs to be verified.");
      }
    });
}

export function signup({ email, password, displayName }) {
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userInfo) => {
      console.log(userInfo);
      userInfo.user
        .updateProfile({ displayName: displayName.trim() })
        .then(() => {});
      userInfo.user.sendEmailVerification()
        .then(() => Alert.alert("Account Created","A message has been sent to your email containing a verification link. Please open the link before proceeding."));
    })
}

export function subscribeToAuthChanges(authStateChanged) {
  auth().onAuthStateChanged((user) => {
    authStateChanged(user);
  });
}

export function signout(onSignedOut) {
  auth()
    .signOut()
    .then(() => {
      onSignedOut();
    });
}
