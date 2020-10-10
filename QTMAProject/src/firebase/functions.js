import auth from "@react-native-firebase/auth";

export function login({ email, password }) {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then((userInfo) => {
      console.log(userInfo)
      if(!userInfo.user.emailVerified){
        userInfo.user.sendEmailVerification();
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
      userInfo.user.sendEmailVerification();
    });
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
