import styled from 'styled-components/native'

export const Base = styled.Text<{ color: string; isPrimary: boolean }>`
  color: ${({ color }) => color};
  left: 11px;
  right: 11px;

  ${({ isPrimary }) =>
    isPrimary
      ? `
    font-weight: 600;
    font-size: 16px;
  `
      : `
    margin-top: 4px;
    opacity: 0.8;
    font-weight: 500;
    font-size: 12px;
  `}
`
