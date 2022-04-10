import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

function ProtectedRoute ({ children }: { children: React.ReactElement }) {
  const { token } = useAuth()
  if (!token) {
    return <Navigate to="/" replace />
  } else {
    return children
  }
}

export default ProtectedRoute