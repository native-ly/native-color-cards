import React from 'react'

export const ListContext = React.createContext<{
  startEditable: (state: boolean) => void
  isEditable: boolean
}>({
  startEditable: () => false,
  isEditable: false,
})
