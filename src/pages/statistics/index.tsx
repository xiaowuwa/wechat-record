import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Color from '../../config/style/color';
import {bgCss, textCSS, flexCSS} from '../../config/style/globalCss';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import RecordItem from './components/RecordItem/index';

const css = StyleSheet.create({
  layoutMargin: {
    marginLeft: 16,
    marginRight: 16,
  },
  layoutPadding: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  button: {
    width: 130,
    height: 36,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
    justifyContent: 'center',
  },
  headerContainer: {
    paddingTop: 12,
    paddingBottom: 12,
  },

  mainContainer: {
    backgroundColor: Colors.gray,
  },

  groupItem: {
    borderRadius: 12,
    ...bgCss.white,
  },
});

function Index(): JSX.Element {
  return (
    <>
      <StatusBar
        barStyle={'default'}
        animated={false}
        backgroundColor={Color.primary}
      />
      <View style={[bgCss.primary, css.layoutPadding, css.headerContainer]}>
        <TouchableHighlight>
          <View style={[css.button, css.layoutPadding]}>
            <Text style={textCSS.white}>全部类型</Text>
            <Text>o</Text>
          </View>
        </TouchableHighlight>
        <View style={[flexCSS.crossCenter]}>
          <Text style={{...textCSS.white, marginTop: 12}}>2021年6月</Text>
          <Text style={{...textCSS.white}}>总支出 ￥1000 总入账：￥56000</Text>
        </View>
      </View>

      <View style={css.mainContainer}>
        <View style={{backgroundColor: '#f6f6f6'}}>
          <RecordItem />
        </View>
      </View>
    </>
  );
}

export default Index;
