import React from 'react'

export const ListContext = React.createContext<{
  editable: boolean
  setEditable: (state: boolean) => void
}>({
  editable: false,
  setEditable: () => false,
})
