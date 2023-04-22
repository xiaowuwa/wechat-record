import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  bgCss,
  flexCSS,
  fontSizeCSS,
  textCSS,
} from '../../../../config/style/globalCss';
import Icon from 'react-native-vector-icons/AntDesign';
import Color from '../../../../config/style/color';

const css = StyleSheet.create({
  layoutMargin: {
    marginLeft: 12,
    marginRight: 12,
  },
  layoutPadding: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  groupItem: {
    marginTop: 12,
    borderRadius: 12,
    ...bgCss.white,
  },
  itemHeader: {
    height: 60,
    backgroundColor: '#fafcfb',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    ...flexCSS.crossCenter,
    ...flexCSS.mainBetween,
  },
  firstItem: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
});

function Index(): JSX.Element {
  return (
    <View style={[css.groupItem, css.layoutMargin]}>
      <View style={[css.itemHeader, css.layoutPadding]}>
        <Text style={textCSS.black}>3月1日</Text>
        <View style={[flexCSS.flexRow]}>
          <Text style={[textCSS.black, fontSizeCSS.sm]}>
            支出：<Text>260</Text>
          </Text>
          <Text style={[textCSS.black, fontSizeCSS.sm, {marginLeft: 16}]}>
            入账：<Text>1900</Text>
          </Text>
        </View>
      </View>
      <View style={[css.layoutPadding, flexCSS.crossCenter]}>
        <View style={{marginRight: 12}}>
          <Icon name="pay-circle1" size={32} color={Color.primary} />
        </View>
        <View
          style={[
            flexCSS.mainBetween,
            css.firstItem,
            {flex: 1, paddingTop: 10, paddingBottom: 10},
          ]}>
          <View>
            <View>
              <Text style={[textCSS.black, fontSizeCSS.lg]}>交通</Text>
            </View>
            <Text style={{...fontSizeCSS.xs, marginTop: 6}}>
              06:00：00 | 坐地铁
            </Text>
          </View>
          <View>
            <Text style={[textCSS.black, fontSizeCSS.lg]}>-￥2.00</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Index;
