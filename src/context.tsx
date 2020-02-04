import React, { ReactChildren, useState } from 'react'

interface Props {
  readonly children: ReactChildren
  readonly data?: unknown[] | null
  readonly onDataChange: (state: any[]) => void
}

// export const ListContext = React.createContext<{
//   editable?: boolean
//   setEditable?: (state: boolean) => void
//   data: unknown[] | null
//   onDataChange?: (state: any[]) => void
// }>({})

export const ListContext = React.createContext<any>({})

export const ColorCardsProvider = ({ children, data, onDataChange }: Props) => {
  const [editable, setEditable] = useState(false)
  const [columns, setColumns] = useState(2)

  return (
    <ListContext.Provider
      value={{
        editable,
        setEditable: (state: any) => setEditable(state),
        data,
        onDataChange,
        columns,
        setColumns,
      }}
    >
      {children}
    </ListContext.Provider>
  )
}
