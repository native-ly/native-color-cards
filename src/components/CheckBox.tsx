import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import { Base } from '../bases/CheckBox'

export const Check = ({ checked, ...props }: { checked: boolean }) => (
  <Base checked={checked} {...props}>
    {checked ? <Ionicons color="#fff" name="md-checkmark" size={18} /> : null}
  </Base>
)
