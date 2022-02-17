import React, { createContext, ReactNode, useContext } from "react";
import * as AuthSession from 'expo-auth-session';

interface AuthProviderProps {
  children: ReactNode
}

interface User {
  id: string,
  name: string,
  email: string,
  photo?: string
}

interface AuthContextData {
  user: User,
  signInWithGoogle(): Promise<void> 
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

  const user = {
    id: "123",
    name: "Philipe",
    email: "philipe@email.com"
  }

  async function signInWithGoogle() {
    try {
      const CLIENT_ID = '718883823043-cjcc0vk0qbng0h5gvvkl8dq041t2m15e.apps.googleusercontent.com';
      const REDIRECT_URI = 'https://auth.expo.io/@philipeacampos/bepharmabee';
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      
      const response = await AuthSession.startAsync({ authUrl });
      console.log(response)

    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  return(
    <AuthContext.Provider value={{ 
        user, 
        signInWithGoogle
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth}