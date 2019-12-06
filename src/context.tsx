import React, { ReactChildren, useState } from 'react'

interface Props {
  children: ReactChildren
}

export const ListContext = React.createContext<{
  editable?: boolean
  setEditable?: (state: boolean) => void
  // data?: any
  // onDataChange?: (state: boolean) => void
}>({})

export const ColorCardsProvider = ({
  children /* data, onDataChange */,
}: Props) => {
  const [editable, setEditable] = useState(false)

  return (
    <ListContext.Provider
      value={{
        editable,
        setEditable: state => setEditable(state),
      }}
    >
      {children}
    </ListContext.Provider>
  )
}
