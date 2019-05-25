import React from 'react'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

import { flex, size } from '../helpers'

const Base = styled.View`
  ${flex}

  ${size}

  left: 11px;
  top: 9px;
  position: absolute;
  background-color: #007aff;
  border: 1px solid #fff;
  border-radius: 15px;
  padding-top: 2px;
`

export const Check = ({ ...props }) => (
  <Base {...props}>
    <Ionicons color="#fff" name="md-checkmark" size={18} />
  </Base>
)
