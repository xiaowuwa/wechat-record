import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {bgCss, flexCSS} from '../../../../config/style/globalCss';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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
    <View style={[css.groupItem, css.layoutMargin, css.layoutPadding]}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text>3月1日</Text>
        <View style={[flexCSS.flexRow]}>
          <Text>
            出<Text>260</Text>
          </Text>
          <Text>
            入<Text>1900</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Index;
