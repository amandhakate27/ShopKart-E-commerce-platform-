import { useContext } from "react"
import { Outlet } from "react-router"
import { AuthContext } from "../context/AuthContext"

const ProtectedRoute = () => {
  const { loggedInUser } = useContext(AuthContext)

  if (!loggedInUser) {
    return <Navigate to="/" replace />
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default ProtectedRoute