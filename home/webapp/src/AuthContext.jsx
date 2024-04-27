import { useState, useEffect, createContext } from 'react'
import supabase from './Supabase'
import Cookies from "js-cookie";

const AuthContext = createContext(null);

function AuthProvider({children}) {
  const [session, setSession] = useState(null)
  const [user, setUser] = useState(null)
  const [classroom, setStoredClassroom] = useState(null)

  const joinClassroom = (classroom) => {
    if(classroom == null) {
      Cookies.remove("classroom");
      setStoredClassroom(null);
    } else {
      setStoredClassroom(classroom);
      Cookies.remove("classroom");
      Cookies.set("classroom", JSON.stringify(classroom), { expires: 365, sameSite: 'strict' });
    }
  }

  useEffect(() => {
    var classroomCookie = Cookies.get("classroom");
    console.log(classroomCookie);
    if(classroomCookie != undefined) {
      console.log(classroomCookie);
      setStoredClassroom(JSON.parse(classroomCookie))
    }

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
    user: user,
    classroom: classroom,
    setClassroom: joinClassroom,
  }

  return (<AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>)
}

export { AuthContext, AuthProvider }