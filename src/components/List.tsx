import React, { useState } from 'react'
import { FlatListProps } from 'react-native'

import { Base } from '../bases/List'

import { ListContext } from '../context'

export const List = (props: FlatListProps<any>) => {
  const [editable, setEditable] = useState(false)

  return (
    <ListContext.Provider
      value={{
        editable,
        setEditable: state => setEditable(state),
      }}
    >
      <Base {...props} />
    </ListContext.Provider>
  )
}
