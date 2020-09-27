import React from 'react'
interface Props {
  readonly data?: unknown[] | null
  readonly onDataChange: (state: any[]) => void
}
export declare const ListContext: React.Context<{
  editable?: boolean | undefined
  setEditable: React.Dispatch<React.SetStateAction<boolean>>
  data: any
  onDataChange: (state: any[]) => void
  columns?: number | undefined
  setColumns: React.Dispatch<React.SetStateAction<number>>
}>
export declare const ColorCardsProvider: React.FC<Props>
export {}
