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
import {IRecordItem, IRecordItemList} from '../../model';
import dayjs from 'dayjs';

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
    marginBottom: 12,
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

interface IProps {
  data: IRecordItem;
}

function Index({data}: IProps): JSX.Element {
  return (
    <View style={[css.groupItem, css.layoutMargin]}>
      <View style={[css.itemHeader, css.layoutPadding]}>
        <Text style={textCSS.black}>{dayjs(data.date).format('MM-DD')}</Text>
        <View style={[flexCSS.flexRow]}>
          <Text style={[textCSS.black, fontSizeCSS.sm]}>
            支出：<Text>{data.paid}</Text>
          </Text>
          <Text style={[textCSS.black, fontSizeCSS.sm, {marginLeft: 16}]}>
            入账：<Text>{data.income}</Text>
          </Text>
        </View>
      </View>
      {data.list.map(i => renderItem(i))}
    </View>
  );
}

function renderItem(data: IRecordItemList) {
  return (
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
            <Text style={[textCSS.black, fontSizeCSS.lg]}>{data.label}</Text>
          </View>
          <Text style={{...fontSizeCSS.xs, marginTop: 6}}>
            {data.time} | {data.merchant}
          </Text>
        </View>
        <View>
          <Text style={[textCSS.black, fontSizeCSS.lg]}>-￥{data.paid}</Text>
        </View>
      </View>
    </View>
  );
}

export default Index;
