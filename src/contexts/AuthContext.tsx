import { createContext, ReactNode, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { auth, firebase } from '../services/firebase';

type User = {
  id: String;
  name: String;
  avatar: String;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error("Missing information from Google Account.");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });

        return () => {
          unsubscribe();
        }
      }
    })
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account.");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      });
    }
  }

  async function signOut() {
    if (!user)  {
      return;
    }

    toast.error("😱 Você saiu da sua Conta!");
    await auth.signOut();

    history.push("/");  
  }
  
  return (
  <AuthContext.Provider value={{ user, signInWithGoogle, signOut }}>
    {props.children}
  </AuthContext.Provider>
  );
}