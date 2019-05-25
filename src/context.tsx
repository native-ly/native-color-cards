import React from 'react'

export const ListContext = React.createContext<{
  startEditable: any
  isEditable: boolean
}>({
  startEditable: () => null,
  isEditable: false,
})
