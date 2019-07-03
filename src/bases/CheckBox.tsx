import styled from 'styled-components/native'

import { flex, size } from '../helpers'

export const Base = styled.View<{ checked: boolean }>`
  ${flex}

  ${size}

  ${({ checked }) =>
    checked
      ? `
  background-color: #007aff;`
      : ``}

  right: 11px;
  top: 9px;
  position: absolute;
  border: 1px solid #fff;
  border-radius: 15px;
  padding-top: 2px;
`
