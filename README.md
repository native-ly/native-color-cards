# [NativeColorCards](https://github.com/native-ly/native-color-cards)

[![NPM version](http://img.shields.io/npm/v/native-color-cards.svg?style=flat-square)](https://www.npmjs.com/package/native-color-cards)
[![NPM downloads](http://img.shields.io/npm/dm/native-color-cards.svg?style=flat-square)](https://www.npmjs.com/package/native-color-cards)
[![run in expo snack](https://img.shields.io/badge/Run%20in%20Snack-4630EB.svg?style=flat-square&logo=EXPO&labelColor=FFF&logoColor=000)](https://snack.expo.io/@jbiesiada/5727bc)

## About
Color cards (Shortcuts.app style) for React Native

## How to Install
First, install the library in your project by npm:
```sh
$ npm install native-color-cards
```

Or Yarn:
```sh
$ yarn add native-color-cards
```

## Getting Started
**• Connect libary with project using ES6 import:**
```js
import { List, Card } from 'native-color-cards';
```

## Options
**List (extends FlatList)**

**Card (extends TouchableScale props), Flat card (extends TouchableOpacity props)**

Name | Type | Default | Description | Available options
-|-|-|-|-
backgroundColor | string | ` ` | Card element background color | e.g.: `#D23440`
checkBoxProps | object | `null` | Props for checkbox (`View` component) | `{ /* options here */ }`
color | string | `adjust` | Card title & icon color | `adjust` - geterates color based on card color, `contrast` - chooses `#fff` or `#000` based on card background color, static color in `rgb`, `hex` etc.
flat | boolean | `false` | Make flat card (without options, gradient, animation, select) | `true` - enable, `false` - dusable
gradient | boolean | `false` | Enable or disable gradient layer over card | `true` - enable, `false` - disable
icon | string | ` ` | Icon name | `@expo/vector-icons` icons
gradientProps | object | `null` | Props for gradient (`LinearGradient` component) | `{ /* options here */ }`
onLongPress | function | `() => void` | Callback on long press | `() => { /* code */ }`
optionsProps | object | `null` | Props for options (`TouchableOpacity` component) | `{ /* options here */ }`
scalable | boolean | `true` | Enable or disable scale change on card press | `true` - enable, `false` - disable
shadow | boolean | `false` | Display shadow for card | `true` - enable, `false` - disable
title | string | ` ` | Card title text | Title of your card

## License
This project is licensed under the MIT License © 2019-present Jakub Biesiada
