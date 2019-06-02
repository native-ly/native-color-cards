import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import TouchableScale from 'react-native-touchable-scale'

export const Base = styled(TouchableScale)`
  ${({ color, shadow, flat }) => `
    border-radius: 10px;
    padding: 9px 11px;
    margin: 6px;
    height: 88px;

    width: ${Dimensions.get('window').width / 2 - 25};
    ${
      flat
        ? `
        border-width: 2px;
        border-color:
      `
        : `background-color:`
    } ${color};

    ${
      shadow
        ? `
        shadow-opacity: 0.75;
        shadow-radius: 5px;
        shadow-color: ${color};
        shadow-offset: 0 0;
      `
        : ``
    }
  `}
`
