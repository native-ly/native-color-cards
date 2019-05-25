import { FlatList, Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const Base = styled(FlatList)`
  width: ${Dimensions.get('window').width};
  padding: 13px;
`
