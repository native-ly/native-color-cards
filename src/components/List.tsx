import React, { useState } from 'react'
import { FlatListProps } from 'react-native'

import { Base } from '../bases/List'

import { ListContext } from '../context'

export const List = (props: FlatListProps<any>) => {
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
