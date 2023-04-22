import Color from './color';
import {StyleSheet} from 'react-native';

export const bgCss = StyleSheet.create({
  primary: {
    backgroundColor: Color.primary,
  },
  white: {
    backgroundColor: Color.white,
  },
});

export const textCSS = StyleSheet.create({
  white: {
    color: Color.white,
  },
  black: {
    color: Color.black,
  },
  primary: {
    color: Color.primary,
  },
});

export const fontSizeCSS = StyleSheet.create({
  xs: {fontSize: 10},
  _xs: {fontSize: 11},
  sm: {fontSize: 12},
  _sm: {fontSize: 13},
  md: {fontSize: 14},
  _md: {fontSize: 15},
  lg: {fontSize: 16},
  _lg: {fontSize: 17},
  xl: {fontSize: 18},
});

export const flexCSS = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  mainCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mainBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  crossCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
