import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.conf";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("there is not provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logIn = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => signOut(auth);

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    // console.log('auth provider loaded')
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);
  return (
    <authContext.Provider
      value={{
        loginWithGoogle,
        resetPassword,
        signUp,
        logIn,
        logOut,
        loading,
        user,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

//! Recuerda
//? Este es un ejemplo que estas funciones te retornan lo que guardan en firebase
//* pudiendo colocar y enviar al back-end informacion mas completa y alimentar a ambas con su informacion
// TODO:
const logInQueRetornaTododelUsuario = async (email, password) => {
  const userCredentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  console.log(userCredentials);
};
console.log(logInQueRetornaTododelUsuario);
