import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import { Base } from '../bases/CheckBox'

export const Check = ({ ...props }) => (
  <Base {...props}>
    <Ionicons color="#fff" name="md-checkmark" size={18} />
  </Base>
)
