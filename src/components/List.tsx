import React, { useState } from 'react'

import { Base } from '../bases/List'

import { List as ListProps } from '../interfaces'

import { ListContext } from '../context'

export const List = (props: ListProps) => {
  const [editable, setEditable] = useState<boolean>(false)

  return (
    <ListContext.Provider
      value={{
        startEditable: () => setEditable(true),
        isEditable: editable,
      }}
    >
      <Base {...props} />
    </ListContext.Provider>
  )
}
