import { createContext, useContext } from "react"

const ThemeContext = createContext({})

function ThemeProvider ({ children }: { children: React.ReactElement }): React.ReactElement {
  const value = {}
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const theme = useContext(ThemeContext)
  return theme
}

export {
  ThemeProvider,
  useTheme,
}