import n, { useState as e, useContext as t } from 'react'
import {
  Dimensions as r,
  ScrollView as o,
  Animated as i,
  Easing as a,
  TouchableOpacity as l,
} from 'react-native'
import c from 'react-native-drag-sort/DragSortableView'
import { impactAsync as d, ImpactFeedbackStyle as s } from 'expo-haptics'
import p from 'color'
import u from 'styled-components/native'
import f from 'react-native-vector-icons/Ionicons'
import { BlurView as m } from 'expo-blur'
import { LinearGradient as x } from 'expo-linear-gradient'
import g from 'react-native-touchable-scale'
var h = n.createContext({
    editable: void 0,
    setEditable: function () {},
    data: [],
    onDataChange: function () {},
    columns: void 0,
    setColumns: function () {},
  }),
  b = function (t) {
    var r = t.children,
      o = t.data,
      i = t.onDataChange,
      a = e(!1),
      l = a[0],
      c = a[1],
      d = e(2),
      s = d[0],
      p = d[1]
    return n.createElement(
      h.Provider,
      {
        value: {
          editable: l,
          setEditable: function (n) {
            return c(n)
          },
          data: o,
          onDataChange: i,
          columns: s,
          setColumns: p,
        },
      },
      r
    )
  },
  v = function () {
    return (v =
      Object.assign ||
      function (n) {
        for (var e, t = 1, r = arguments.length; t < r; t++)
          for (var o in (e = arguments[t]))
            Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o])
        return n
      }).apply(this, arguments)
  }
function y(n, e) {
  var t = {}
  for (var r in n)
    Object.prototype.hasOwnProperty.call(n, r) &&
      e.indexOf(r) < 0 &&
      (t[r] = n[r])
  if (null != n && 'function' == typeof Object.getOwnPropertySymbols) {
    var o = 0
    for (r = Object.getOwnPropertySymbols(n); o < r.length; o++)
      e.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, r[o]) &&
        (t[r[o]] = n[r[o]])
  }
  return t
}
function w(n, e) {
  return (
    Object.defineProperty
      ? Object.defineProperty(n, 'raw', { value: e })
      : (n.raw = e),
    n
  )
}
var E,
  k,
  P,
  O,
  D,
  j,
  z,
  C,
  S = function (e) {
    var i = e.renderItem,
      a = (y(e, ['renderItem']), t(h).data),
      l = r.get('window').width
    return n.createElement(
      o,
      {
        scrollEnabled: !0,
        contentContainerStyle: { paddingLeft: 12, paddingVertical: 12 },
      },
      n.createElement(c, {
        dataSource: a,
        parentWidth: l,
        childrenHeight: 124,
        childrenWidth: l / 2 - 8,
        renderItem: i,
      })
    )
  },
  V = u.Text(
    E ||
      (E = w(
        ['\n  color: ', ';\n  left: 11px;\n  right: 11px;\n\n  ', '\n'],
        ['\n  color: ', ';\n  left: 11px;\n  right: 11px;\n\n  ', '\n']
      )),
    function (n) {
      return n.color
    },
    function (n) {
      return n.isPrimary
        ? '\n    font-weight: 600;\n    font-size: 16px;\n  '
        : '\n    margin-top: 4px;\n    opacity: 0.8;\n    font-weight: 500;\n    font-size: 12px;\n  '
    }
  ),
  L = function (e) {
    var t = e.color,
      r = e.children,
      o = e.isPrimary,
      i = void 0 !== o && o,
      a = y(e, ['color', 'children', 'isPrimary'])
    return n.createElement(V, v({}, a, { color: t, isPrimary: i }), r)
  },
  I = function (n) {
    return [p(n).lighten(0.5).alpha(0.3).toString(), 'transparent']
  },
  N =
    '\n  display: flex;\n  align-items: center;\n  justify-content: center;\n',
  B = '\n  width: 26px;\n  height: 26px;\n',
  H = u(l)(
    k ||
      (k = w(
        [
          '\n  position: absolute;\n  z-index: 100;\n  right: 11px;\n  top: 9px;\n',
        ],
        [
          '\n  position: absolute;\n  z-index: 100;\n  right: 11px;\n  top: 9px;\n',
        ]
      ))
  ),
  R = u(m)(
    P ||
      (P = w(
        ['\n  ', '\n\n  ', '\n  \n  border-radius: 13px;\n'],
        ['\n  ', '\n\n  ', '\n  \n  border-radius: 13px;\n']
      )),
    N,
    B
  ),
  T = function (e) {
    var t = e.color,
      r = e.faded,
      o = e.isDark,
      i = y(e, ['color', 'faded', 'isDark'])
    return n.createElement(
      H,
      v({}, i),
      n.createElement(
        R,
        { faded: r, tint: p(o).isDark() ? 'dark' : 'light', intensity: 60 },
        n.createElement(f, {
          name: 'ios-more',
          color: t,
          size: 22,
          style: { paddingTop: 2 },
        })
      )
    )
  },
  W = u(x)(
    O ||
      (O = w(
        [
          '\n  border-radius: 10px;\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n',
        ],
        [
          '\n  border-radius: 10px;\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n',
        ]
      ))
  ),
  q = function (e) {
    var t,
      r = e.color,
      o = e.faded
    return n.createElement(W, {
      start: [0.2, 0],
      end: [0.8, 1],
      colors: o
        ? ['#fff4', '#fff4']
        : p(r).isDark()
        ? ((t = r), ['transparent', p(t).darken(0.5).alpha(0.3).toString()])
        : I(r),
    })
  },
  A = u.View(
    D ||
      (D = w(
        [
          '\n  ',
          '\n\n  ',
          '\n\n  ',
          '\n\n  right: 11px;\n  top: 9px;\n  position: absolute;\n  border: 1px solid #fff;\n  border-radius: 15px;\n  padding-top: 2px;\n',
        ],
        [
          '\n  ',
          '\n\n  ',
          '\n\n  ',
          '\n\n  right: 11px;\n  top: 9px;\n  position: absolute;\n  border: 1px solid #fff;\n  border-radius: 15px;\n  padding-top: 2px;\n',
        ]
      )),
    N,
    B,
    function (n) {
      return n.checked ? '\n  background-color: #007aff;' : ''
    }
  ),
  F = function (e) {
    var t = e.checked,
      r = y(e, ['checked'])
    return n.createElement(
      A,
      v({}, r, { checked: t }),
      t
        ? n.createElement(f, { color: '#fff', name: 'md-checkmark', size: 18 })
        : null
    )
  },
  G = u(g)(j || (j = w(['\n  ', '\n'], ['\n  ', '\n'])), function (n) {
    var e = n.color,
      t = n.shadow
    return (
      '\n    border-radius: 13px;\n    padding: 9px 11px;\n    height: 114px;\n    width: 170px;\n\n    background-color: ' +
      e +
      ';\n\n    ' +
      (n.flat ? 'opacity: 0.5;' : '') +
      '\n\n    ' +
      (t
        ? '\n        shadow-opacity: 0.75;\n        shadow-radius: 5px;\n        shadow-color: ' +
          e +
          ';\n        shadow-offset: 0 0;\n        elevation: 6;\n      '
        : '') +
      '\n  '
    )
  }),
  J = u.View(
    z ||
      (z = w(
        [
          '\n  position: absolute;\n  bottom: 8px;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  width: 100%;\n  height: 70px;\n',
        ],
        [
          '\n  position: absolute;\n  bottom: 8px;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  width: 100%;\n  height: 70px;\n',
        ]
      ))
  ),
  K = u(f)(
    C ||
      (C = w(
        ['\n  width: 28px;\n  margin-top: -2px;\n  text-align: center;\n'],
        ['\n  width: 28px;\n  margin-top: -2px;\n  text-align: center;\n']
      ))
  ),
  M = function (r) {
    var o = r.backgroundColor,
      c = r.checkBoxProps,
      u = r.color,
      f = void 0 === u ? 'adjust' : u,
      m = r.flat,
      x = void 0 !== m && m,
      g = r.gradient,
      b = void 0 !== g && g,
      w = r.gradientProps,
      E = r.icon,
      k = r.onLongPress,
      P = r.optionsProps,
      O = r.scalable,
      D = void 0 === O || O,
      j = r.shadow,
      z = void 0 !== j && j,
      C = r.subtitle,
      S = void 0 === C ? '' : C,
      V = r.title,
      I = void 0 === V ? '' : V,
      N = y(r, [
        'backgroundColor',
        'checkBoxProps',
        'color',
        'flat',
        'gradient',
        'gradientProps',
        'icon',
        'onLongPress',
        'optionsProps',
        'scalable',
        'shadow',
        'subtitle',
        'title',
      ]),
      B = t(h),
      H = B.editable,
      R = B.setEditable,
      W = e(!1),
      A = W[0],
      M = W[1],
      Q = new i.Value(0)
    return (
      (function (n) {
        i.loop(
          i.sequence([
            i.timing(n, {
              toValue: 0.3,
              duration: 100,
              easing: a.bounce,
              useNativeDriver: !0,
            }),
            i.timing(n, {
              toValue: -0.3,
              duration: 100,
              easing: a.bounce,
              useNativeDriver: !0,
            }),
            i.timing(n, {
              toValue: 0,
              duration: 100,
              easing: a.bounce,
              useNativeDriver: !0,
            }),
          ])
        ).start()
      })(Q),
      'adjust' === f
        ? (f = (function (n) {
            var e = p(n)
            return e[e.isDark() ? 'lighten' : 'darken'](0.5).toString()
          })(o))
        : 'contrast' === f && (f = p(o).isDark() ? '#fff' : '#000'),
      n.createElement(
        i.View,
        {
          style: {
            flex: 1,
            transform: [
              {
                rotate:
                  H && !x
                    ? Q.interpolate({
                        inputRange: [-1, 1],
                        outputRange: ['-0.06rad', '0.06rad'],
                      })
                    : '0rad',
              },
            ],
          },
        },
        n.createElement(
          G,
          v({}, N, {
            activeScale: !D || x ? 1 : 0.96,
            onPress: function () {
              return !x && void (H && M(!A))
            },
            as: x ? l : G,
            onLongPress: function () {
              return !x && !H && (R(!0), d(s.Heavy), void k())
            },
            color: o,
            shadow: z && !x,
            flat: x,
          }),
          E && n.createElement(K, { name: E, color: f, size: 30 }),
          !x &&
            (H
              ? n.createElement(F, v({}, c, { checked: A }))
              : n.createElement(T, v({}, P, { color: f, isDark: o }))),
          n.createElement(
            J,
            null,
            I
              ? n.createElement(
                  L,
                  { isPrimary: !0, color: f, numberOfLines: 2 },
                  I
                )
              : null,
            S && !x
              ? n.createElement(L, { numberOfLines: 1, color: f }, S)
              : null
          ),
          b && !x && n.createElement(q, v({}, w, { color: f, faded: A && H }))
        )
      )
    )
  }
export { M as Card, b as ColorCardsProvider, S as List }
//# sourceMappingURL=native-color-cards.esm.js.map
