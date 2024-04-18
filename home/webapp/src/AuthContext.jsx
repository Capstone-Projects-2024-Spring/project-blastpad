import { useState, useEffect, createContext } from 'react'
import supabase from './Supabase'

const AuthContext = createContext(null);

function AuthProvider({children}) {
  const [session, setSession] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)

      if (!session) return;
      
      supabase.auth.getUser().then(({data}) => {
        setUser(data.user)
      })
    })

    return () => subscription.unsubscribe()
  }, [])

  let value = {
    session: session,
    user: user
  }

  return (<AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>)
}

export { AuthContext, AuthProvider }