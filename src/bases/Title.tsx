import styled from 'styled-components/native'

export const Base = styled.Text<{ color: string }>`
  margin-top: -2px;
  color: ${({ color }) => color};
  font-weight: 600;
  font-size: 17px;
  position: absolute;
  bottom: 9px;
  left: 11px;
  right: 11px;
`
