import React from 'react';
import {
  FlatList,
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
import Icon from 'react-native-vector-icons/AntDesign';
import {IRecordItem} from './model';

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
    backgroundColor: 'f6f6f6',
    marginTop: 12,
  },

  groupItem: {
    borderRadius: 12,
    ...bgCss.white,
  },
});

const records: IRecordItem[] = [
  {
    id: 1,
    date: new Date(),
    paid: 10,
    income: 20,
    list: [
      {
        label: '餐饮',
        merchant: '肯德基',
        paid: 2,
        time: '16:00',
      },
    ],
  },
  {
    id: 2,
    date: new Date(),
    paid: 10,
    income: 20,
    list: [
      {
        label: '交通',
        merchant: '深圳地铁',
        paid: 2,
        time: '16:00',
      },
    ],
  },
  {
    id: 3,
    date: new Date(),
    paid: 10,
    income: 20,
    list: [
      {
        label: '餐饮',
        merchant: '麦当劳',
        paid: 2,
        time: '16:00',
      },
    ],
  },
  {
    id: 4,
    date: new Date(),
    paid: 10,
    income: 20,
    list: [
      {
        label: '其它',
        merchant: '美宜佳',
        paid: 2,
        time: '16:00',
      },
    ],
  },
  {
    id: 5,
    date: new Date(),
    paid: 10,
    income: 20,
    list: [
      {
        label: '餐饮',
        merchant: '粒上皇',
        paid: 2,
        time: '16:00',
      },
    ],
  },
  {
    id: 6,
    date: new Date(),
    paid: 10,
    income: 20,
    list: [
      {
        label: '交通',
        merchant: '深圳通',
        paid: 2,
        time: '16:00',
      },
    ],
  },
];

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
          <View
            style={[
              css.button,
              css.layoutPadding,
              flexCSS.mainBetween,
              flexCSS.crossCenter,
            ]}>
            <Text style={textCSS.white}>全部类型</Text>
            <Text style={textCSS.white}>|</Text>
            <Icon name="appstore-o" color={Color.white} />
          </View>
        </TouchableHighlight>
        <View style={[flexCSS.crossCenter, {marginTop: 10}]}>
          <Text style={[textCSS.white]}>2021年6月</Text>
          <Text style={[{marginLeft: 6, marginRight: 10, opacity: 0.8}]}>
            <Icon name="caretdown" color={Color.white} size={6} />
          </Text>
          <Text style={{...textCSS.white}}>总支出 ￥1000 总入账：￥56000</Text>
        </View>
      </View>

      <View style={[css.mainContainer, {paddingBottom: 90}]}>
        <View>
          <FlatList
            data={records}
            renderItem={i => <RecordItem data={i.item} />}
            keyExtractor={i => i.id.toString()}
          />
        </View>
      </View>
    </>
  );
}

export default Index;
