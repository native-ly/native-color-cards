import React from 'react'
import { FlatListProps } from 'react-native'

import { Base } from '../bases/List'

export const List = ({ ...props }: FlatListProps<any>) => (
  <Base
    {...props}
    scrollEnabled={true}
    columnWrapperStyle={{
      paddingHorizontal: 15,
    }}
  />
)
