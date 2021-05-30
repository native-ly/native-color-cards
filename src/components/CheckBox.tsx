import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Base } from '../bases/CheckBox'

export const Check = ({ checked, ...props }: { checked: boolean }) => (
  <Base {...props} checked={checked}>
    {checked ? <Ionicons color="#fff" name="md-checkmark" size={18} /> : null}
  </Base>
)
