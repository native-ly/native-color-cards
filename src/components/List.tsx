import React from 'react'
import { FlatList, Dimensions, FlatListProps } from 'react-native'
import styled from 'styled-components/native'

const Base = styled(FlatList)`
  width: ${Dimensions.get('window').width};
  padding: 13px;
`

export const List = ({ ...props }: FlatListProps<object>): JSX.Element => (
  <Base {...props} />
)
