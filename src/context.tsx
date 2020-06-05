import React, { useState } from 'react'

interface Props {
  // readonly data?: unknown[] | null
  // readonly onDataChange: (state: any[]) => void
}

export const ListContext = React.createContext<{
  editable?: boolean
  setEditable: React.Dispatch<React.SetStateAction<boolean>>
  data: any
  onDataChange: (state: any[]) => void
  columns?: number
  setColumns: React.Dispatch<React.SetStateAction<number>>
}>({
  editable: undefined,
  setEditable: () => undefined,
  // data: [],
  // onDataChange: () => undefined,
  columns: undefined,
  setColumns: () => undefined,
})

export const ColorCardsProvider: React.FC<Props> = ({
  children,
  // data,
  // onDataChange,
}) => {
  const [editable, setEditable] = useState(false)
  const [columns, setColumns] = useState(2)

  return (
    <ListContext.Provider
      value={{
        editable,
        setEditable,
        // setEditable: (state: any) => setEditable(state),
        // data,
        // onDataChange,
        columns,
        setColumns,
      }}
    >
      {children}
    </ListContext.Provider>
  )
}
