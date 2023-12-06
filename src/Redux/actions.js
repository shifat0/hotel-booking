import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcFpUTBeuMKUQoJX0UH0OOf91lPndUW4I",
  authDomain: "burger-builder-5486f.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const authSuccess = (username, token, userId) => {
  return {
    type: "AUTH_SUCCESS",
    payload: {
      username: username,
      token: token,
      userId: userId,
    },
  };
};

export const authError = (errMsg) => {
  return {
    type: "AUTH_FAILURE",
    payload: errMsg,
  };
};

export const authLogin = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(
          authSuccess(
            userCredential.user.displayName,
            userCredential.user.accessToken,
            userCredential.user.uid
          )
        );
        console.log(userCredential.user);

        localStorage.setItem("token", userCredential.user.accessToken);
        localStorage.setItem("username", userCredential.user.displayName);
      })
      .catch((err) => {
        dispatch(authError(err.message));
      });
  };
};

export const authSignup = (name, email, password) => {
  return async (dispatch) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: name,
        }).then(() => {
          dispatch(
            authSuccess(
              userCredential.user.displayName,
              userCredential.user.accessToken,
              userCredential.user.uid
            )
          );

          localStorage.setItem("token", userCredential.user.accessToken);
          localStorage.setItem("username", userCredential.user.displayName);
        });
      })
      .catch((err) => {
        dispatch(authError(err.message));
      });
  };
};

export const authLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  return {
    type: "AUTH_LOGOUT",
  };
};
