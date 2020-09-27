import React, { useState } from 'react'

// TODO T
interface ContextProps {
  readonly editable?: boolean
  setEditable: React.Dispatch<React.SetStateAction<boolean>>
  readonly data: any
  onDataChange: (state: any[]) => void
  readonly columns?: number
  setColumns: React.Dispatch<React.SetStateAction<number>>
}

export const ListContext = React.createContext<ContextProps>({
  editable: undefined,
  setEditable: () => undefined,
  data: [],
  onDataChange: () => undefined,
  columns: undefined,
  setColumns: () => undefined,
})

interface Props<T> {
  readonly children: React.ReactNode
  readonly data?: T[] | null
  readonly onDataChange: (state: T[]) => void
}

export const ColorCardsProvider = <T,>({
  children,
  data,
  onDataChange,
}: Props<T>) => {
  const [editable, setEditable] = useState(false)
  const [columns, setColumns] = useState(2)

  // TODO
  const newLocal = {
    editable,
    setEditable,
    // setEditable: (state: any) => setEditable(state),
    data,
    onDataChange,
    columns,
    setColumns,
  }

  return (
    <ListContext.Provider value={newLocal}>{children}</ListContext.Provider>
  )
}
