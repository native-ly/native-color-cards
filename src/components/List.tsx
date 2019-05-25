import React from 'react'
import { FlatList, Dimensions, FlatListProps } from 'react-native'
import styled from 'styled-components/native'

export const List = ({ ...props }: FlatListProps<object>): JSX.Element => (
  <Base {...props} />
)
