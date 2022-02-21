import React, { createContext, ReactNode, useContext, useState } from "react";
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

interface AuthorizationResponse {
  params: {
    access_token: string
  },
  type: string
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

  const [user, setUser] = useState<User>({} as User)


  async function signInWithGoogle() {
    try {
      const CLIENT_ID = '718883823043-cjcc0vk0qbng0h5gvvkl8dq041t2m15e.apps.googleusercontent.com';
      const REDIRECT_URI = 'https://auth.expo.io/@philipeacampos/app';
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      
      const { params, type } = await AuthSession
      .startAsync({ authUrl }) as AuthorizationResponse;

        if(type === 'success'){
          const response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${params.access_token}`);
          const userInfo = await response.json();

          setUser({
            id: userInfo.id,
            email: userInfo.email,
            name: userInfo.given_name,
            photo: userInfo.picture
          })

          console.log(userInfo)
        }else{
          console.log('Houve erro na solicitação')
        }
      

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

export { AuthProvider, useAuth }