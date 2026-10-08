import { useContext } from 'react'
import { Outlet , Navigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'
const PublicRoute = () => {

  const {loggedInUser} = useContext(AuthContext)
  
        if(loggedInUser){
          return <Navigate to="/main" replace />
        }

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default PublicRoute