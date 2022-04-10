import React, { useState } from "react"

type AuthContext = {
  token: string
  handleLogin: () => void
  handleLogout: () => void
}
const AuthContext = React.createContext({
  token: '',
  handleLogin: () => {},
  handleLogout: () => {},
})
function AuthProvider({ children }: { children: React.ReactElement }): React.ReactElement {
  const [token, setToken] = useState<string>('')
  function handleLogin() {
    setToken('yes')
  }

  function handleLogout() {
    setToken('')
  }

  const value: AuthContext = {
    token,
    handleLogin,
    handleLogout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContext {
  const context = React.useContext(AuthContext)
  return context
}
export { AuthProvider, useAuth }