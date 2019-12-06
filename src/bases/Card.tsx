import styled from 'styled-components/native'
import TouchableScale from 'react-native-touchable-scale'

export const Base = styled(TouchableScale)`
  ${({ color, shadow, flat }) => `
    border-radius: 13px;
    padding: 9px 11px;
    height: 114px;
    margin: 5px;

    background-color: ${color};

    ${flat ? `opacity: 0.5;` : ``}

    ${
      shadow
        ? `
        shadow-opacity: 0.75;
        shadow-radius: 5px;
        shadow-color: ${color};
        shadow-offset: 0 0;
        elevation: 6;
      `
        : ``
    }
  `}
`

export const Info = styled.View`
  position: absolute;
  bottom: 8px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 70px;
`
