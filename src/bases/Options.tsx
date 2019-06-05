import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { BlurView } from 'expo-blur'

import { flex, size } from '../helpers'

export const Base = styled(TouchableOpacity)`
  position: absolute;
  z-index: 100;
  right: 11px;
  top: 9px;
`
export const BlurLayer = styled(BlurView)`
  ${flex}

  ${size}
  
  border-radius: 13px;
  padding-top: 2px;
`
