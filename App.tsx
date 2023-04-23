/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/pages/home/index';
import Setting from './src/pages/setting/index';
import Statistics from './src/pages/statistics/index';
import Color from './src/config/style/color';
import Icon from 'react-native-vector-icons/Ionicons';

// 创建底部导航器
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={router => ({
          tabBarIcon: ({focused, color, size}) => {
            let icon;
            switch (router.route.name) {
              case 'Home':
                icon = 'ios-document-text';
                break;
              case 'Statistics':
                icon = 'ios-bar-chart';
                break;
              case 'Setting':
                icon = 'ios-settings';
                break;
              default:
                break;
            }

            return (
              <Icon
                name={focused ? icon : icon + '-outline'}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: Color.primary,
          tabBarStyle: {
            paddingTop: 6,
            paddingBottom: 6,
            height: 52,
          },
          headerStyle: {
            backgroundColor: Color.primary,
            height: 42,
            shadowColor: Color.primary,
          },
          headerTintColor: Color.white,
          headerTitleAlign: 'center',
          // tabBarIcon:
        })}>
        <Tab.Screen name="Home" component={Home} options={{title: '记账本'}} />
        <Tab.Screen
          name="Statistics"
          component={Statistics}
          options={{title: '统计'}}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{title: '设置'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
