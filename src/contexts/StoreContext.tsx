import React from 'react'

export const StoreContext = React.createContext<any>()

export const StoreProvider = ({ children }) => {
  return <StoreContext.Provider value={}>{children}</StoreContext.Provider>
}
